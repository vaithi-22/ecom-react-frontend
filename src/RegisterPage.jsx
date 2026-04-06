import { Field, Form, Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFlashMessage } from "./FlashMessageStore";
import { useLocation } from "wouter";



function RegisterPage() {

    const [marketingPreferences, setMarketingPreferences] = useState([]);
    const [_, setLocation] = useLocation();
    const { showMessage } = useFlashMessage();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        salutation: Yup.string().required('Salutation is required'),
        country: Yup.string().required('Country is required'),
    });




    useEffect(() => {
        const fetchMarketingPreferences = async () => {
            const response = await axios.get("/marketingPreferences.json");
            setMarketingPreferences(response.data);
        }
        fetchMarketingPreferences();

    }, [])

    // intial values
    const intialValues = {
        "name": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "salutation": "",
        "country": "",
        "marketingPreferences": ""
    }

    // handle the submission

    const handleSubmit = async (values, formikHelpers) => {
        console.log("values from the form =", values);
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/users/register", values);
            console.log("Form has been proceeded successfully");
            formikHelpers.setSubmitting(false);
            showMessage('Registration successful!', 'success');
            setLocation("/");

        } catch (error) {
            showMessage('Registration failed. Please try again.', 'danger');
        }
    }




    return (
        <>
            <div className="container m-5">
                <h1>Register</h1>
                <Formik
                    initialValues={intialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}

                >
                    {
                        (formik) => {
                            return (
                                <Form>
                                    {/*name*/}
                                    <div className="mb-3 ">
                                        <label htmlFor="name" className="form-label" >Name :</label>
                                        <Field type="text" className="form-control" id="name" name="name" />
                                    </div>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-danger"
                                    />
                                    {/*email*/}
                                    <div className="mb-3 ">
                                        <label htmlFor="email" className="form-label">Email :</label>
                                        <Field type="email" className="form-control" id="email" name="email" />
                                    </div>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                    {/*password*/}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password :</label>
                                        <Field type="password" className="form-control" id="password" name="password" />
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger"
                                    />
                                    {/*confirm password*/}
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password :</label>
                                        <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                                    </div>
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-danger"
                                    />
                                    {/*salutation*/}
                                    <div className="mb-3">
                                        <label className="form-lable me-4">Salutation:</label>

                                        <div className="form-check form-check-inline">
                                            <Field type="radio" className="form-check-input" id="mr" value="mr" name="salutation" />
                                            <label htmlFor="mr">Mr.</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <Field type="radio" className="form-check-input" id="mrs" value="mrs" name="salutation" />
                                            <label htmlFor="mrs">Mrs.</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field type="radio" className="form-check-input" id="ms" value="ms" name="salutation" />
                                            <label htmlFor="ms">Ms.</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field type="radio" className="form-check-input" id="dr" value="dr" name="salutation" />
                                            <label htmlFor="dr">Dr.</label>
                                        </div>
                                    </div>
                                    <ErrorMessage
                                        name="salutation"
                                        component="div"
                                        className="text-danger"
                                    />
                                    {/*marketing preferences */}
                                    <div className="mb-3">
                                        <label className="form-label">Marketing preferences :</label>
                                        {
                                            marketingPreferences.map((preference) => {
                                                return (
                                                    <div className="form-check" key={preference.id}>
                                                        <Field type="checkbox"
                                                            name="marketingPreferences"
                                                            id={"marketing-preferences-" + preference.id}
                                                            value={String(preference.id)}
                                                            className="form-check-input"
                                                        />
                                                        <label className="form-check-label" htmlFor={"marketing-preferences-" + preference.id}>{preference.preference}</label>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                    {/*country */}
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="country">Country</label>
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="country"
                                            name="country"
                                        >
                                            <option value=" ">Select Country</option>
                                            <option value="sg">Singapore</option>
                                            <option value="my">Malaysia</option>
                                            <option value="th">Thailand</option>
                                            <option value="in">India</option>
                                            <option value="oc">Others Country</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="text-danger"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={formik.isSubmitting}
                                    >
                                        Register
                                    </button>

                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </>
    )
}

export default RegisterPage;