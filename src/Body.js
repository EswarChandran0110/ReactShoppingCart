import React from "react";
//Fetching CardItems
import CardItems from "./CardItems";

function Body({ data, addToCart, removeFromCart }) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {/* mapping-out CardItems From ProductData*/}
            {data.map((item, index) => (
              <CardItems
                key={index}
                item={item}
                id={index}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
