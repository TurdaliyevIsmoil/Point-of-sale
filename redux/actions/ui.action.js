import { clearCart } from "../slices/product.slice";
import { closeSuccessModal, openSuccessModal } from "../slices/ui.slice";

export const sendOrder = () => {
  return (dispatch) => {
    // HTTP request
    dispatch(openSuccessModal());
    setTimeout(() => {
      dispatch(closeSuccessModal());
      dispatch(clearCart());
    }, 2000);
  };
};
