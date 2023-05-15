import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GoogleSignInButton from './GoogleSignInButton';
import OutlookSignInButton from './OutlookSignInButton';
import Glob from '../Images/Stolle_new.gif';
import './LoginInPage.css'

import Stollelogo from '../Images/Stolle_logo.svg';


const validationSchema = Yup.object().shape({
  username: Yup.string().matches(/^[^@]*@[^@]*$/,'Username should contain only one "@" symbol').min(2).max(25).required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginInPage = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting,resetForm  }) => {
    console.log(values);
    resetForm({ values: initialValues }); 
    setSubmitting(false);
  };


  return (
    <div className="parent-container">
      <div className="loginCard">
        <div className="logo-container">
          <img src={Stollelogo} alt="Image 1" className="Stollelogo" />
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form style={{ padding: '45px' }} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2"></label>
                <Field
                  as={Input}
                  className="myInput"
                  name="username"
                  prefix={<UserOutlined />}
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  render={(errorMsg) => <div className="error">{errorMsg}</div>}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2"></label>
                <Field
                  as={Input.Password}
                  type="password"
                  className="myPass"
                  name="password"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                />
                <Button
                  type="primary"
                  className="signIButton"
                  htmlType="submit"
                  onClick={handleSubmit}

                  disabled={isSubmitting}
                >
                  Sign In

                </Button>
                <ErrorMessage
                  name="password"
                  render={(errorMsg) => <div className="error">{errorMsg}</div>}
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <p>OR</p>
                <GoogleSignInButton />
                <OutlookSignInButton />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="globe-image">
        <img
          src={Glob}
          alt="Stolle Logo"
          style={{ width: '100%', height: 'auto', maxWidth: '60%' }}
        />
      </div>
    </div>
  );
};

export default LoginInPage;
