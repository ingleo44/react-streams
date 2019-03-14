import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderError = ({touched,valid,error}) => {
        if (touched && !valid) {
            return <div className="ui error message">{error}</div>
        }
    }


    renderInput = ({ input, label, meta })=> {
        const className = `field${meta.error && meta.touched}? 'error': ''`;
        console.log(meta);
        return (
            <div className={className}>
                <label>{label}</label>
                <input  {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    obSubmit(formValues) {
        console.log(formValues);

    }

    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.obSubmit)} className="ui form error">
                    <Field name="title" label="Title" component={this.renderInput} />
                    <Field name="description" label="Description" component={this.renderInput} />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>



        );
    }
}


const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'you must enter a value';
    }
    if (!formValues.description) {
        errors.description = 'you must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);