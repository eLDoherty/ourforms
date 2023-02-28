import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {userRegister} from '../config/AuthUsers';

const FromRegist = () => {

    const[inputRole, setRole] = useState('teacher');

    const handleRadioButton = (e) => {
        if( e.target.id === 'student' ) {
            setRole('student')
        } else {
            setRole('teacher')
        }
    }

    const initValues = {     
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '', 
        confirmPassword: '',
        lastEducation: '',
        age: ''
    };

    const handleRegisterButton = (values) => {
        userRegister(values.email, values.password);
    }

    let lastEducationValidation = Yup.string().required("Last education is required");
    let ageValidation = Yup.number().required("Age is required").positive();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        username: Yup.string()
            .min(4, "Username must be 4 characters at minimum")
            .required("Required username"),
        firstname: Yup.string()
            .required("Username is required"),
        lastname: Yup.string()
            .required("Firstname is required"),
        password: Yup.string()
            .min(6, "Password must be 4 characters at minimum")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password is not match")
            .required("Input password again"),
        [inputRole === "teacher" ? "lastEducation" : "age"]: inputRole === "teacher" ? lastEducationValidation : ageValidation,
    });

    return(
        <div className='container'>
             <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={initValues}
              validationSchema={LoginSchema}
              onSubmit={(values) => handleRegisterButton(values)}
            >
              {({ touched, errors, isSubmitting, values }) =>
                (
                  <div>
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Form Registration</h1>
                      </div>
                    </div>
                    <Form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email" className="fw-bold">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    autoComplete="off"
                                    className={`mt-2 form-control
                                    ${touched.email && errors.email ? "is-invalid" : ""}`}
                                />
        
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                /> 
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="username" className="fw-bold">Username</label>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Enter username"
                                    autoComplete="off"
                                    className={`mt-2 form-control
                                    ${touched.username && errors.username ? "is-invalid" : ""}`}
                                />
        
                                <ErrorMessage
                                    component="div"
                                    name="username"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstname" className='mt-3 fw-bold'>Firstname</label>
                                <Field
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter firstname"
                                    autoComplete="off"
                                    className={`mt-2 form-control
                                    ${touched.firstname && errors.firstname ? "is-invalid" : ""}`}
                                />
        
                                <ErrorMessage
                                    component="div"
                                    name="firstname"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="lastname" className='mt-3 fw-bold'>Lastname</label>
                                <Field
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter lastname"
                                    autoComplete="off"
                                    className={`mt-2 form-control
                                    ${touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                                />
        
                                <ErrorMessage
                                    component="div"
                                    name="lastname"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        {/* Radiobox */}
                        <div className="row">
                            <div className="form-group col-md-6">
                                <p className="mt-3 fs-6 fw-bold">Choose your role</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="teacher" onClick={handleRadioButton} defaultChecked />
                                    <label className="form-check-label" htmlFor="teacher">
                                        Teacher
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="student" onClick={handleRadioButton} />
                                    <label className="form-check-label" htmlFor="student">
                                        Student
                                    </label>
                                </div>
                            </div>
                            { inputRole === 'teacher' ? 
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastEducation" className='mt-3 fw-bold'>Last Education</label>
                                    <Field
                                        type="text"
                                        name="lastEducation"
                                        placeholder="Enter last education"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.lastEducation && errors.lastEducation ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="lastEducation"
                                        className="invalid-feedback"
                                    />
                                </div>
                            :
                                <div className="form-group col-md-6">
                                    <label htmlFor="age" className='mt-3 fw-bold'>Your age</label>
                                    <Field
                                        type="string"
                                        name="age"
                                        placeholder="Enter your age"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.age && errors.age ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="age"
                                        className="invalid-feedback"
                                    />
                                </div>
                            }
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password" className="mt-3 fw-bold">
                            Password
                            </label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className={`mt-2 form-control
                                ${
                                    touched.password && errors.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                            />
                            <ErrorMessage
                                component="div"
                                name="password"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="mt-3 fw-bold">
                            Password
                            </label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter password again"
                                className={`mt-2 form-control
                                ${
                                    touched.confirmPassword && errors.confirmPassword
                                    ? "is-invalid"
                                    : ""
                                }`}
                            />
                            <ErrorMessage
                                component="div"
                                name="confirmPassword"
                                className="invalid-feedback"
                            />
                        </div>
  
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-4"
                        >
                            Submit
                        </button>
                    </Form>
                  </div>
                )
              }
            </Formik>
          </div>
        </div>
        </div>
    )
}

export default FromRegist;