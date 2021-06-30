import React from "react";
//Fetching StarRating Component
import StarRating from "./StarRating";

function CardItems({ item, id, addToCart, removeFromCart }) {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            className="card-img-top"
            alt="cartItem"></img>
          <div className="card-body p-4">
            <div className="text-center">
                {/* Product-Name */}
              <h5 className="fw-bolder">{item.title}</h5>
                {/* Product-Price */}
              <p className="card-text">$ {item.price}</p>
                {/* Star-Rating */}
              <p className=" text-center">
                <StarRating />
              </p>
               
              {item.cart === false ? (
                //    AddToCart Button Appearance 
                <button
                  className="btn btn-dark"
                  data-id={id}
                  onClick={(event) => addToCart(event)}>
                  Add to Cart
                </button>
              ) : (
                //   RemoveFromCart Button Appearance
                <button
                  className="btn btn-danger"
                  data-id={id}
                  onClick={(event) => removeFromCart(event)}>
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItems;
