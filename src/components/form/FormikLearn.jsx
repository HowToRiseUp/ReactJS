import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const FormikLearn = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
    });

    return (
        <Formik
            initialValues={{ name: 'Hao' }}
            validationSchema={SignupSchema} // Changed from validateYupSchema to validationSchema
            onSubmit={(values) => {
                console.log("Form submitted:", values);
            }}
        >
            <Form className="m-5 flex flex-col gap-5 max-w-[300px]">
                <Field type="name" className="border border-gray-400 rounded-md p-3 " name="name" placeholder="Name" />
                <ErrorMessage name="name" className="text-sm text-red-500" component="div" />
                <button type="submit" className="py-4 px-8 bg-blue-900 text-white rounded-md">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikLearn;
