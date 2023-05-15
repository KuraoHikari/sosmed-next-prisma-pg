"use client";

import { useState } from "react";
import { Modal } from "../";
import { Heading } from "../../Heading";
import { Input } from "../../inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
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
  return (
    <Modal
      isOpen={true}
      body={bodyContent}
      //   onClose={() => {}}
      //   onSubmit={() => {}}
      actionLabel="Register"
    />
  );
};
export default LoginModal;
