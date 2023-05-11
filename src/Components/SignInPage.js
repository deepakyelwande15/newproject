import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import GoogleSignInButton from './GoogleSignInButton';
import OutlookSignInButton from './OutlookSignInButton';
import stolleLogo from '../Images/Stolle_new.gif';



const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignInPage = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign-In logic here
    console.log('Signing in with Google');
  };

  return (
    <div className=" flex items-center justify-center h-screen">

      <div className="max-w-md mt-190 mb-143 ml-284 mr-859">
        <div className="p-4 border-red-700">
          <img
            src="https://www.cantechonline.com/wp-content/uploads/stolle.png"
            alt="Stolle Logo"
            className="w-full mb-4"
          />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-2">

                  </label>
                  <Field
                    name="username"
                    placeholder="Enter your username"
                    className={`appearance-none border rounded w-full py-2 px-3 ${errors.username && touched.username
                      ? 'border-red-500'
                      : 'border-gray-300'
                      }`}
                  />
                  {errors.username && touched.username ? (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2">

                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"

                    className={`appearance-none border rounded w-full py-2 px-3 ${errors.password && touched.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                      }`}
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign In

                  </button>
                  <p className='font-normal font-roboto text-base leading-6'>OR</p>
                  <GoogleSignInButton />


                  <OutlookSignInButton />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <img  src={stolleLogo} alt="Stolle Logo" className="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4" />

    </div>

  );
};

export default SignInPage;
