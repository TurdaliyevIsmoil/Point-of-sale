import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import CheckoutModal from "./CheckoutModal/CheckoutModal";
import { Fragment } from "react";
import TransitionComponent from "./../UI/Transition";

export default () => {
  const { add_product_modal, success_modal } = useSelector((state) => state.ui);
  return (
    <Fragment>
      <TransitionComponent inprop={add_product_modal}>
        <AddProduct />
      </TransitionComponent>
      <TransitionComponent inprop={success_modal}>
        <CheckoutModal />
      </TransitionComponent>
    </Fragment>
  );
};
