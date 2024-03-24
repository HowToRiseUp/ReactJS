import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
const SignUpFormik = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        intro: Yup.string()
            .max(255, 'Too Long!'), // Assuming 255 characters max
        // job: Yup.string().required('Required')

        accept: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions') // Assuming 'accept' is a checkbox field
            .required('Required'),
    });
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                intro: '',
                job: '', // Add job field here
                accept: true
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    console.log(values)
                    actions.setSubmitting(false);
                }, 3000);
            }}
        >
            {({ isSubmitting }) => {
                return (<Form action="#" autoComplete="off" className="m-5 flex flex-col gap-5 max-w-[300px] mx-auto">
                    <h1 className="text-2xl text-center font-medium ">Sign Up</h1>
                    <MyTextField label={'First name'} name={'firstName'} type='text' placeholder='Enter your first name'></MyTextField>
                    <MyTextField label={'Last name'} name={'lastName'} type='text' placeholder='Enter your last name'></MyTextField>
                    <MyTextField label={'Email address'} name={'email'} type='text' placeholder='Enter your email address'></MyTextField>
                    <MyTextAria label={'Intro'} name={'intro'} placeholder='Introduce yourself...'></MyTextAria>
                    <SelectOption label='Job' name='job'>
                        <option value=''>Select a job</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='BackEnd'>BackEnd</option>
                        <option value='FullStack'>FullStack</option>
                    </SelectOption>
                    <CheckBox name='accept' label={'I accept the terms and conditions'}></CheckBox>
                    <button type="submit" className="bg-[#7D6AFF] rounded-md p-3" disabled={isSubmitting}>
                        {!isSubmitting ?
                            <span className=" text-white font-medium">Submit</span> :
                            <div className="w-4 h-4 border-2 border-white mx-auto  rounded-full border-l-transparent animate-spin"></div>
                        }
                    </button>
                </Form>)
            }}
        </Formik>
    );
};

// eslint-disable-next-line react/prop-types
const MyTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col ">
            <label>
                <div className="text-sm font-medium">{label}</div>
                <input className="mt-1 border border-gray-400 rounded-md p-3 w-full"  {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};
// eslint-disable-next-line react/prop-types
const MyTextAria = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col ">
            <label>
                <div className="text-sm font-medium">{label}</div>
                <textarea className="mt-1 border border-gray-400 rounded-md p-3 w-full h-[150px] resize-none"  {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const SelectOption = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select
                className="p-4 rounded-md border border-gray-100"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );

};

// eslint-disable-next-line react/prop-types
const CheckBox = ({ label, ...props }) => {
    return (
        <div className="flex flex-col">
            <label className="flex gap-5">
                <input type="checkbox" {...props} />
                <div className="text-sm text-gray-500">{label}</div>
            </label>
        </div>
    )
}

export default SignUpFormik;