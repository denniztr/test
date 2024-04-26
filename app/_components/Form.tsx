'use client';

import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import axios from 'axios';


export default function Form() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      phone: '',
      name: '',
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const { phone, name } = values;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer RLPUUOQAMIKSAB2PSGUECA',
    };

    const data = {
      stream_code: 'vv4uf',
      client: {
        phone: phone,
        name: name,
      },
    };

    axios
      .post('https://order.drcash.sh/v1/order', data, { headers })
      .then((cb) => {
        if (cb?.status === 200) {
          router.push('/success')
          toast.success('Мы Вам позвоним!')
        }
        if (cb?.status !== 200) {
          toast.error('Что-то пошло не так!')
        }
      })
      .catch((error) => toast.error('Что-то пошло не так!'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="pl-4 py-2 appearance-none bg-transparent outline-none border focus:border-[#009b49] shadow-sm rounded-lg"
        type="number"
        placeholder="Телефон"
        {...register('phone', { required: true })}
      />
      <input
        className="ml-6 pl-4 py-2 appearance-none bg-transparent outline-none border focus:border-[#009b49] shadow-sm rounded-lg"
        type="text"
        placeholder="Имя"
        {...register('name', { required: true })}
      />
      <div>
        <button 
          className='w-[150px] bg-primaryColor h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]'>
            Отправить
          </button>
      </div>
    </form>
  );
}
