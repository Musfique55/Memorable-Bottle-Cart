const getCartItem = () => {
   const key = localStorage.getItem('cart');
    if(key){
       return  JSON.parse(key);
    }
    return [];
}

const saveCartToLs= (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

const addCartToLs = (id) => {
    const cart = getCartItem();
    cart.push(id);
    saveCartToLs(cart);
}

export  {addCartToLs, getCartItem};