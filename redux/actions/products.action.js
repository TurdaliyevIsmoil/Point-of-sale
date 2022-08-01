import { collection, addDoc, getDocs } from "firebase/firestore";
import { addProducts, setProducts } from "../slices/product.slice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "./../firebase";
import { endLoading, startLoading } from "../slices/ui.slice";


// Add Product to Database
export const sendProduct = (product) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      // Image reference
      const storageRef = ref(
        storage,
        `products/${new Date().getTime() + product.image.name}`
      );
      // Image Upload
      const snapshot = await uploadBytes(storageRef, product.image);

      // Get Uploaded image URL
      const imageURL = await getDownloadURL(
        ref(storage, snapshot.metadata.fullPath)
      );

      // Full Customed object
      const customProduct = {
        name: product.name,
        price: product.price,
        image: imageURL,
      };

      // Send Data to database
      const prodDoc = await addDoc(collection(db, "products"), {
        ...customProduct,
      });
      customProduct.id = prodDoc.id;
      // Update State without Fetch
      dispatch(endLoading());
      dispatch(addProducts(customProduct));
    } catch (e) {
      return Error("Error adding document: ", e);
    }
  };
};

// Fetch Products
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      dispatch(endLoading());
      dispatch(setProducts(products));
    } catch (e) {
      return Error("Error adding document: ", e);
    }
  };
};
