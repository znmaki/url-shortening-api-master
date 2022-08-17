import React from 'react'
//formik and yup
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

const FormURL = ({url, setUrl}) => {   
    const userSchema = Yup.object().shape({
        url: Yup.string()
            .url('URL no valido')
            .required('Please add a link')
    })

    const handleSubmit = async value => {
        const urlObject = `https://api.shrtco.de/v2/shorten?url=${value.url}`;
        const { data } = await axios(urlObject);
        const arrayUrl = [...url, data.result]
        setUrl(arrayUrl)
    }

    return (
        <Formik
            initialValues={{
                url: ''
            }}

            enableReinitialize={true}
            validationSchema={userSchema}

            onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
            }}
        >
            <div className="bg-ima-custze-2 flex justify-center">
                <Form className='flex flex-col 2xl:flex 2xl:flex-row 2xl:items-center relative w-[80%]'>
                        {/* <Field
                            className="rounded-md"
                            type="text"
                            id='url'
                            name='url'
                            placeholder="Shorten a link here..."
                        /> */}
                        <Field name='url'>
                            {({
                                field,
                                form: { touched, errors },
                                meta,
                            }) => (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Shorten a link here..." {...field}
                                        className={`basis-3/4 rounded-lg p-1 ${meta.touched && meta.error ? 'border-4 border-red-600' : ''}`}
                                    />
                                    {meta.touched && meta.error && (
                                        <p className="text-red-600 text-xs italic 2xl:absolute 2xl:top-[2.8rem] mb-5 2xl:mb-0">{meta.error}</p>
                                    )}
                                </>
                            )}
                        </Field>
                        {/* <ErrorMessage name="url" component='p' className='' /> */}
                    <input
                        type="submit"
                        value="Shorten It!"
                        className="button-primary-form"
                    />
                </Form>
            </div>
        </Formik>
    )
}

export default FormURL