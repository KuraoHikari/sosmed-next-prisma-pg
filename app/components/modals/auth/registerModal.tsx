"use Client";

import { Modal } from "../";
import { Heading } from "../../Heading";

const RegisterModal = () => {
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Wellcome to KuraoSosmed" subtitle="Create an account!" />
    </div>
  );
  return (
    <Modal
      isOpen={true}
      //   onClose={() => {}}
      //   onSubmit={() => {}}
      actionLabel="Register"
    />
  );
};
export default RegisterModal;
