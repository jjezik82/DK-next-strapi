import { motion } from 'framer-motion';
import { Formik } from 'formik';
import * as yup from 'yup';

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
  async function submitHandler(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/sendmail`, {
      method: 'post',
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <div className='xl:w-1/2 max-w-xl p-10 m-10'>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          /* and other goodies */
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
                  {errors.name && touched.name}
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
                  {errors.email && touched.email}
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
                  {errors.subject && touched.subject}
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
                  {errors.message && touched.message}
                </p>
              </label>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='rounded-md font-bold text-white bg-primary w-full mt-4 px-10 py-3'
                type='submit'
              >
                odoslať
              </motion.button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
