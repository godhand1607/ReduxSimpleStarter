import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

const FORM_NAME = 'PostsNewForm';

class PostsNew extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label htmlFor={field.input.name}>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    renderTitleField(field) {
        return (
            <div className="form-group">
                <label>Title</label>
                <input
                    className="form-control"
                    type="text"
                    /*onChange={field.input.onChange}
                    onFocus={field.input.onFocus}*/
                    {...field.input}
                />
            </div>
        );
    }

    renderTagsField(field) {
        return (
            <div className="form-group">
                <label>Tags</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // If errors is empty, the form is valid.
    // If errors has *any* properties, redux-form
    // assumes form is invalid.
    return errors;
}

export default reduxForm({
    form: FORM_NAME,
    validate
})(
    connect(null, { createPost })(PostsNew)
);
