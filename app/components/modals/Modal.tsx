'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../buttons/Button';

interface ModalProps {
  actionLabel: string;
  body?: React.ReactElement;
  disabled?: boolean;
  footer?: React.ReactElement;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  actionLabel,
  body,
  disabled,
  footer,
  isOpen,
  onClose,
  onSubmit,
  secondaryAction,
  secondaryActionLabel,
  title,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, []);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="
      bg-neutral-800/70
      flex
      fixed
      inset-0
      items-center
      justify-center
      outline-none
      overflow-x-hidden
      overflow-y-auto
      z-50

      focus:outline-none
  "
    >
      <div
        className="
            h-full
            mx-auto
            my-6
            relative
            w-full

            md:h-auto
            md:w-4/6
            lg:h-auto
            lg:w-3/6
            xl:w-2/5
        "
      >
        <div
          className={`
            duration-300
            h-full

            translate
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="
            bg-slate-800 
             border-0 
             flex 
             flex-col 
             h-full
             outline-none 
             relative 
             rounded-lg 
             shadow-lg 
             translate
             w-full 

             focus:outline-none

             lg:h-auto
             md:h-auto
            "
          >
            <div
              className="
                border-b-[1px]
                border-slate-700
                flex 
                items-center 
                justify-center
                p-6
                relative   
                rounded-t
          "
            >
              <button
                className="
                    absolute
                    border-0 
                    left-9
                    p-1
                    transition
         
                    hover:opacity-70
                  "
                onClick={handleClose}
              >
                <IoMdClose size={18} className="fill-rose-400" />
              </button>
              <div className="font-semibold text-lg">{title}</div>
            </div>
            {/*body*/}
            <div className="flex-auto p-6 relative ">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-6">
              <div
                className="
                flex 
                flex-row 
                gap-4 
                items-center 
                w-full"
              >
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                    outline
                  />
                )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
