import { createContext, useReducer } from "react";
import products from "./store_product_item";

export const ProductList = createContext({
        products,
        cartItem: {},
        addToCart: ()=>{},
        deleteCart: ()=>{},
        getTotalAmount: ()=>{},
        noOfCartItem: ()=>{},
});



const cartListReducer = (currentCartItem, action) => {
  let newCartItem = currentCartItem
  if(action.type === "ADD_TO_CART"){
    if(!currentCartItem[action.payload.item.id]){
      newCartItem = {[action.payload.item.id]: 1, ...currentCartItem};
    }else{
      newCartItem = {...currentCartItem,[action.payload.item.id]: newCartItem[action.payload.item.id]+1};
    }
  }else if(action.type === "DELETE_CART"){
    newCartItem = {...currentCartItem,[action.payload.item.id]: newCartItem[action.payload.item.id]-1};
  }
  return newCartItem;
}


const ProductListProvider = ({ children }) => {
  const [cartItem, dispatchCartItem] = useReducer(cartListReducer, {});

  const addToCart = (item) => {
    dispatchCartItem({
      type: "ADD_TO_CART",
      payload: {
        item,
      }
    })
  }

  const deleteCart = (item) => {
    dispatchCartItem({
      type: "DELETE_CART",
      payload: {
        item,
      }
    })
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let itemInfo = products.find((product) => product.id == item)
        totalAmount += itemInfo.discount_amount*cartItem[item];
      }
    }
    return totalAmount;
  }

  const noOfCartItem = () => {
    let totalCartItem = [];
    for(const item in cartItem){
      totalCartItem.push(item);
    }
    return totalCartItem;
    // console.log(totalCartItem);
  }

  

  return (
    <ProductList.Provider value={{products, addToCart, deleteCart, cartItem, getTotalAmount, noOfCartItem}}>{children}</ProductList.Provider>
  );
}

export default ProductListProvider;
