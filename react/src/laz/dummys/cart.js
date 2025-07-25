import { v4 as uuidv4 } from 'uuid';
import iphone from '../assets/product_images/iphone-14.png'
import tablet from '../assets/product_images/tablet.png'

export const products_cart = {
    products:[{
                    id: uuidv4(),
                    name: "IPHONE PLUS 14",
                    img: iphone,
                    price: 1800.00.toFixed(2),
                    quantity: 1
                },{
                    id: uuidv4(),
                    name: "DELL INSPIRON 3511",
                    img: tablet,
                    price: 980.00.toFixed(2),
                    quantity: 1
    }],
    async price(){
        let initPrice = 0;
        await this.products.map((prod)=> initPrice = Math.floor(prod.price)+initPrice)
        return initPrice.toFixed(2)
    }
};
