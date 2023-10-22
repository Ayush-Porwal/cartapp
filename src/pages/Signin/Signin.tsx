import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

import * as classes from './Signin.module.scss';

export default function Signin() {
    const toast = useRef(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate: (data) => {
            const errors = {};

            if (!data.username) {
                errors.username = 'Username is required.';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            return errors;
        },
        onSubmit: () => {
            formik.resetForm();
            navigate('/');
        },
    });

    const isFormFieldInvalid = (name) =>
        !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? (
            <small className="p-error">{formik.errors[name]}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };

    return (
        <div
            className={`card flex justify-content-center ${classes.signinContainer}`}
        >
            <form
                onSubmit={formik.handleSubmit}
                className={`flex flex-column gap-2 ${classes.signinContainerForm}`}
            >
                <Toast ref={toast} />
                <div
                    className={`p-inputgroup flex-1 ${classes.signinContainerFormUsername}`}
                >
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText
                        id="username"
                        name="username"
                        value={formik.values.username}
                        placeholder="Username"
                        onChange={(e) => {
                            formik.setFieldValue('username', e.target.value);
                        }}
                        className={classNames({
                            'p-invalid': isFormFieldInvalid('username'),
                        })}
                    />
                </div>
                <div
                    className={`p-inputgroup flex-1 ${classes.signinContainerFormPassword}`}
                >
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-key"></i>
                    </span>
                    <InputText
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        placeholder="Password"
                        onChange={(e) => {
                            formik.setFieldValue('password', e.target.value);
                        }}
                        className={classNames({
                            'p-invalid': isFormFieldInvalid('password'),
                        })}
                    />
                </div>
                <div className={classes.signinContainerSignupButton}>
                    don't have an account?
                    <Button
                        label="signup"
                        text
                        onClick={() => navigate('/signup')}
                    />
                </div>
                {getFormErrorMessage('value')}
                <Button type="submit" label="Login" />
            </form>
        </div>
    );
}
