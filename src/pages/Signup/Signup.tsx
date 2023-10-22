import { useRef } from 'react';
import { useNavigate, usenavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

import * as classes from './Signup.module.scss';

export default function Signup() {
    const toast = useRef(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validate: (data) => {
            const errors = {};

            if (!data.email) {
                errors.email = 'Email is required.';
            }

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
            className={`card flex justify-content-center ${classes.signupContainer}`}
        >
            <form
                onSubmit={formik.handleSubmit}
                className={`flex flex-column gap-2 ${classes.signupContainerForm}`}
            >
                <Toast ref={toast} />
                <div
                    className={`p-inputgroup flex-1 ${classes.signupContainerFormEmail}`}
                >
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <InputText
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        placeholder="Email"
                        onChange={(e) => {
                            formik.setFieldValue('email', e.target.value);
                        }}
                        className={classNames({
                            'p-invalid': isFormFieldInvalid('email'),
                        })}
                    />
                </div>
                <div
                    className={`p-inputgroup flex-1 ${classes.signupContainerFormUsername}`}
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
                    className={`p-inputgroup flex-1 ${classes.signupContainerFormPassword}`}
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
                <div className={classes.signupContainerSigninButton}>
                    have an account?
                    <Button
                        label="signin"
                        text
                        onClick={() => navigate('/signin')}
                    />
                </div>
                {getFormErrorMessage('value')}
                <Button type="submit" label="Signup" />
            </form>
        </div>
    );
}
