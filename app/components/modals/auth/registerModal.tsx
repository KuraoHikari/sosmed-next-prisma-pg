"use client";

import { useCallback, useState } from "react";
import { Modal } from "../";
import { Heading } from "../../Heading";
import { Input } from "../../inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../buttons";

import { FcGoogle } from "react-icons/fc";
import { useLoginModal, useRegisterModal } from "@/app/hooks";
import axios from "axios";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`/api/register`, data)
      .then(() => {
        reset();
        // toast.success('Registered!');
        registerModal.onClose();
        // loginModal.onOpen();
        console.log("berhasil");
      })
      .catch((error: any) => {
        // toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

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
        onClick={() => signIn("google")}
      />

      <div
        className="
          font-light
          mt-4 
          text-neutral-500 
          text-center 

          dark:text-neutral-300
        "
      >
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className="
              cursor-pointer 
              text-neutral-800

              hover:underline

              dark:text-white
            "
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
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
