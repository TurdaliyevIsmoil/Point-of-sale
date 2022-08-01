import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import { closeModal } from "../../../redux/slices/ui.slice";
import { sendProduct } from './../../../redux/actions/products.action';
export default () => {
  const form = useRef();
  const dispatch = useDispatch();
  const submitHnadler = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      image: e.target.image.files[0],
    };
    form.current.reset();
    dispatch(sendProduct(product));
    dispatch(closeModal());
  };
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none">
        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
          <form
            ref={form}
            onSubmit={submitHnadler}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <ModalHeader close={() => dispatch(closeModal())} />
            <Form />
            <ModalFooter close={() => dispatch(closeModal())} />
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-[40] bg-black"></div>
    </Fragment>
  );
};
