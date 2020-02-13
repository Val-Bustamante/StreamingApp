import React from "react";

class GoogleAuth extends React.Component {

    state={isSignedIn: null}

    //initializes OAuth library
    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            //init returns a promise after the client library has initialized
            window.gapi.client.init({
                clientId: '749911539093-uu5rsf1g0v281emfcjo0blo7ud1q2ug4.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                //now update component level state
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I don't know if we are signed in</div>
        }else if(this.state.isSignedIn){
            return <div>I am signed in!</div>
        }else{
            return <div>I am not signed in!</div>
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