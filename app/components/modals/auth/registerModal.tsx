'use client';

import { useState } from 'react';
import { Modal } from '../';
import { Heading } from '../../Heading';
import { Input } from '../../inputs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../buttons';

import { FcGoogle } from 'react-icons/fc';
import { useRegisterModal } from '@/app/hooks';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // setIsLoading(true);
    console.log(data);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Wellcome to KuraoSosmed" subtitle="Create an account!" />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />

      <div className="text-neutral-500"></div>
    </div>
  );
  return (
    <Modal
      title="Register"
      isOpen={registerModal.isOpen}
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
