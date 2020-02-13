import React from "react";

class GoogleAuth extends React.Component {

    state = { isSignedIn: null }

    //initializes OAuth library
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //init returns a promise after the client library has initialized
            window.gapi.client.init({
                clientId: '749911539093-uu5rsf1g0v281emfcjo0blo7ud1q2ug4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //now update component level state
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    //arrow function since its a callback
    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return <button
                className="ui red google button"
                onClick={this.onSignOut}>
                <i className="google icon">
                    Sign Out
                </i>
            </button>
        } else {
            return <button
                className="ui red google button"
                onClick={this.onSignIn}>
                <i className="google icon">
                    Sign In
                </i>
            </button>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;