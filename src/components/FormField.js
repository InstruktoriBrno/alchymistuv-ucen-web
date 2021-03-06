import React from 'react';
import PropTypes from 'prop-types';
import {useField} from 'react-final-form';
import {composeValidations} from '../utils';

import style from './FormField.module.scss';

const FormField = ({name, label, component: Component, validate, ...props}) => {
    const {input, meta: {touched, error, submitSucceeded}} = useField(name, {validate: composeValidations(validate)});
    const showError = error && touched;

    return (
        <div className={style.main}>
            {label && <label htmlFor={name} className={style.label}>{label}</label>}
            <Component {...props} {...input} invalid={showError} disabled={submitSucceeded} />
            {showError && <div className={style.error}>{error}</div>}
        </div>
    );
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    component: PropTypes.func.isRequired,
    validate: PropTypes.arrayOf(PropTypes.func.isRequired),
};

FormField.defaultProps = {
    label: null,
    validate: [],
};

export default FormField;
