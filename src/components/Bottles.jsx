import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import '../components/Bottle.css'
import { addCartToLs, getCartItem } from "../localstorage";
import Cart from "./cart/Cart";

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=> {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[]);

    useEffect(()=>{
      const storedCart =  getCartItem();
      const savedCart = [];
    //   console.log('bottles :',bottles)
      if(storedCart) {
        for(const id of storedCart){
            // console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                savedCart.push(bottle);
            }
        }
        setCart(savedCart)
      }
    },[bottles])

    const handleBottles = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addCartToLs(bottle.id)
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <Cart cart={cart}></Cart>
            <div  className="bottles-container">
            {
                bottles.map((bottle)=>{
                   return <Bottle key={bottle.id} handleBottles={handleBottles} bottle={bottle}></Bottle>
                })
            }
            </div>
        </div>
    );
};

export default Bottles;