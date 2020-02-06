import RehypeReact from 'rehype-react';
import React, {createElement, Fragment} from 'react';
import classnames from 'classnames';
import emailValidator from 'email-validator';

export const noop = () => {};

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    createElement,
    Fragment,
    components,
}).Compiler;

export const required = (value) => ((value !== null && value !== undefined && value !== '') ? undefined : 'Toto pole je povinné.');

export const validEmail = (value) => (emailValidator.validate(value) ? undefined : 'Toto není e-mailová adresa.');

export const composeValidations = (validations) => (value) => validations
    .map((validation) => validation(value))
    .find((result) => result !== undefined);

export const styled = (style, Tag) => ({className, ...props}) => (
    <Tag {...props} className={classnames(style, className)} />
);
