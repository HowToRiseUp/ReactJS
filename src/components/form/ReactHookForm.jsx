import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

const ReactHookForm = () => {
    const schema = yup
        .object({
            name: yup.string().required(),
            email: yup.string().email().required(),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = (data) => {
        console.log("wait...");
        setTimeout(() => {
            console.log(data);
        }, 3000);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-[300px] mx-auto mt-5'>
            <div className='flex flex-col gap-2'>
                <input defaultValue="" {...register("name")} placeholder='TExt test ...' className='p-3 border border-gray-400 rounded-md' />
                {errors?.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
                <input {...register("email", { required: true })} placeholder='TExt test ...' className='p-3 border border-gray-400 rounded-md' />
                {errors?.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
            </div>
            <input type="submit" className='px-6 py-3 mt-2 w-full bg-red-400 rounded-md' />
        </form>
    );
};

export default ReactHookForm;