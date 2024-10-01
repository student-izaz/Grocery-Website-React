import "./App.css";
import Header from "./components/Header";
import Links from "./components/Links";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";
import { useState } from "react";
import UserToggle from "./components/UserToggle";
import ProductListProvider from "./ItemStore.jsx/Context";
import { Outlet } from "react-router-dom";

function App() {
  const [Cart, setCart] = useState("hide");
  const [userToggle, setUserToggle] = useState(false);

  return (
    <>
      <ProductListProvider>
        <Header setUserToggle={setUserToggle} userToggle={userToggle} />
        {userToggle && <UserToggle />}
        <Links setCart={setCart} />
        {Cart === "show" ? <CartItems setCart={setCart} /> : ""}
        <Outlet/>
        <Footer />
      </ProductListProvider>
    </>
  );
}

export default App;
