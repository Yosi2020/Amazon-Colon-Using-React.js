import { Button } from '@material-ui/core'
import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log("this the basket >>>", basket);

    const addToBasket =  () => {
        //sipatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item : {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product_info'>
                 <p>{title}</p>
                 <p className='product_price'>
                     <small>$</small>
                     <strong>{price}</strong>
                 </p>
                 <div className='product_rating'>
                     {Array(rating).fill().map((_, i) =>
                     (<p>⭐</p>))
                     }
                 </div>
            </div>
            <img src = {image} alts=''/>
            <Button onClick={addToBasket}>Add to Basket</Button>
        </div>
    )
}

export default Product
