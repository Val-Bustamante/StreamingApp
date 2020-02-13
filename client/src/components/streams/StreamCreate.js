// /streams/new
//Field is a componnet, reduxForm is a function
import {Field, reduxForm} from 'redux-Form'
import React from 'react'

//class based component because we will use helper components
class StreamCreate extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                StreamCreate
        </div>
        )
    }
}

//redux-form function acts the same way as connect, it will reach into action creator and retrive the info from the form
export default reduxForm({
    form: 'createStream'
})(StreamCreate);