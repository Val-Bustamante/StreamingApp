import React from "react";
import {connect} from 'react-redux'

import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {


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
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    //will call the right action creator
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
 
        }
    }

    //arrow function since its a callback
    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
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
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, {signOut, signIn})(GoogleAuth);