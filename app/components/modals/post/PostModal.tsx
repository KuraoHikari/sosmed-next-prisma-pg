'use client';

import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Modal } from '../';
import { Heading } from '../../Heading';
import { ImageUpload, Input } from '../../inputs';
import { useState } from 'react';
import { usePostModal } from '@/app/hooks';

const PostModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const postModal = usePostModal();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
      images: '',
    },
  });
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const imageSrc = watch('imageSrc');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your place?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="content"
        label="Content"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
      <ImageUpload
        onChange={(value) => setCustomValue('imageSrc', value)}
        value={imageSrc}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postModal.isOpen}
      body={bodyContent}
      onClose={postModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Create Post"
      actionLabel="Post"
    />
  );
};

export default PostModal;
