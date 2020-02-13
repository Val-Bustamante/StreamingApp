// /streams/new
//Field is a componnet, reduxForm is a function
import { Field, reduxForm } from 'redux-form'
import React from 'react'

//class based component because we will use helper components
class StreamCreate extends React.Component {
    renderInput(formProps) {
        //must make input a controlled element
        return (
            //***hook up onchange handler and value prop to the input element
            //can do this instead: 
            //onChange={formProps.input.onChange}
            //value={formProps.input.value}
            //adds all keyvalue pairs and add them as props to the input element
            <div className="ui form field">
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        )
    }

    //does not recieve an evebt, it recieved the values of the form that wre submitted
    onSubmit(formValues) {
console.log(formValues)
    }
    render() {

        return (
            //can customize the render input function by adding additional props to the field element
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Title">
                </Field>
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Description">

                    ></Field>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

//redux-form function acts the same way as connect, it will reach into action creator and retrive the info from the form
export default reduxForm({
    form: 'createStream'
})(StreamCreate);