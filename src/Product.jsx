import {useState} from "react";

function Product({id, name, description, img, price}){
    const [count, setCount] = useState(0)

    const handleAddToCart = () => {
        setCount(count + 1);
    }

    return(
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary" onClick={handleAddToCart}>Add to cart</a>
                </div>
                <div className="card-footer">
                    Ten produkt został dodany do koszyka {count} razy
                </div>

            </div>
        </>
    )
}

export default Product;