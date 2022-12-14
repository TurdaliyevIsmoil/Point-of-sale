import Head from "next/head";
import Cart from "../components/Cart";
import Navbar from "../components/layouts/Navbar";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import styles from "../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/products.action";
import Modals from "../components/Modals";

export default function Home() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    products.length === 0 ? dispatch(getProducts()) : null;
  }, []);

  return (
    <div className="h-full bg-blue-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modals />

      <Navbar />

      <main
        className={`grid-cols-4 grid p-2 h-auto overflow-hidden gap-2 ${styles.main}`}
      >
        <Sidebar />
        <Products />
        <Cart />
      </main>
    </div>
  );
}
