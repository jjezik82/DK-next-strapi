import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Slide from 'react-reveal/Fade';

let schema = yup.object().shape({
  name: yup.string().required('Vaše meno je povinný údaj.'),
  email: yup
    .string()
    .email('Nesprávny formát emailu.')
    .required('Váš email je povinný údaj.'),
  subject: yup.string().required('Predmet správy je povinný údaj.'),
  message: yup.string().required('Obsah správy je povinný údaj.'),
});
const ContactForm = () => {
  async function submitHandler(values) {
    const formData = values;
    const sendForm = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/sendmail`,
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );
    const res = await sendForm.json();
    if (!res.ok) {
      Swal.fire({
        title: 'Chyba!',
        text: res.error?.message,
        icon: 'error',
        confirmButtonText: 'Zavrieť',
      });
    }
    Swal.fire({
      title: 'Ďakujeme!',
      text: 'Vaša správa bola odoslaná úspešne.',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    });
  }

  return (
    <Slide right>
      <div className='w-full xl:w-1/2 xl:p-10 m-10 max-w-[500px]'>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            submitHandler(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div className='grid grid-cols-1 gap-6'>
                <label className='block'>
                  <span
                    className={`${
                      errors.name && touched.name && '!text-red-400'
                    }`}
                  >
                    Vaše meno
                  </span>
                  <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={`
                    {mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary 
                    focus:ring-0
                    focus:ring-offset-0}
                    ${
                      errors.name &&
                      touched.name &&
                      'border-red-400 focus:border-red-600'
                    }
                  `}
                  />
                  <p className='text-md text-red-400'>
                    {errors.name && touched.name && errors.name}
                  </p>
                </label>
                <label className='block'>
                  <span
                    className={`${
                      errors.email && touched.email && '!text-red-400'
                    }`}
                  >
                    Email address
                  </span>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`
                    {mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0 focus:ring-offset-0}
                    ${
                      errors.email &&
                      touched.email &&
                      'border-red-400 focus:border-red-600'
                    }
                  `}
                    placeholder='john@example.com'
                  />
                  <p className='text-md text-red-400'>
                    {errors.email && touched.email && errors.email}
                  </p>
                </label>
                <label className='block'>
                  <span
                    className={`${
                      errors.subject && touched.subject && '!text-red-400'
                    }`}
                  >
                    Predmet správy
                  </span>
                  <input
                    type='text'
                    name='subject'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    className={`
                    {mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0 focus:ring-offset-0}
                    ${
                      errors.subject &&
                      touched.subject &&
                      'border-red-400 focus:border-red-600'
                    }
                  `}
                  />
                  <p className='text-md text-red-400'>
                    {errors.subject && touched.subject && errors.subject}
                  </p>
                </label>
                <label className='block'>
                  <span
                    className={`${
                      errors.message && touched.message && '!text-red-400'
                    }`}
                  >
                    Vaša správa
                  </span>
                  <textarea
                    name='message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={`
                    {mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0 focus:ring-offset-0}
                    ${
                      errors.message &&
                      touched.message &&
                      'border-red-400 focus:border-red-600'
                    }
                  `}
                    rows='3'
                  ></textarea>
                  <p className='text-md text-red-400'>
                    {errors.message && touched.message && errors.message}
                  </p>
                </label>
                {isSubmitting ? (
                  <button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='rounded-md font-bold text-white bg-primary w-full mt-4 px-10 py-3 disabled:opacity-60'
                    type='submit'
                    disabled
                  >
                    <AiOutlineLoading3Quarters className='inline-block animate-spin  h-5 w-5 mr-3' />
                    odosiela...
                  </button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='rounded-md font-bold text-white bg-primary w-full mt-4 px-10 py-3'
                    type='submit'
                  >
                    odoslať
                  </motion.button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Slide>
  );
};

export default ContactForm;
