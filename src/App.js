import React ,{useState}from "react";
import './App.css';
//Data fetching from ProductData
import ProductData from "./ProductData"
//Header File
import HeaderCard from "./Header";
//Nav File
import Nav from "./Nav";
//Body File
import Body from "./Body";
//Footer File
import FooterCard from"./FooterCard";
 
function App() {
  //State Hook of ProductData
  const [data, setData] = useState(ProductData);
  //State Hook for Counting the Products in Cart
  const [cartCount, setCartCount] = useState(0);
  //Function For Adding Products to Cart
  let addToCart = (event)=> {
    let index = event.target.dataset.id;
    // console.log(index);
    let tempData = data;
    tempData[index].cart = true;
    setCartCount(cartCount+1);
    setData(tempData);
  }
  //Function To Remove Product From Cart
  let removeFromCart = (event)=>{
    let index = event.target.dataset.id;
    // console.log(index);
    let tempData = data;
    tempData[index].cart = false;
    if(cartCount > 0){setCartCount(cartCount-1)}
    setData(tempData)
  }
  return (
    <div className="App">
       {/* NavBar */}
       <Nav count={cartCount}/>
       {/* Header  */}
       <HeaderCard />
       {/* Content Body  */}
       <Body data={data} addToCart={addToCart} removeFromCart={removeFromCart} />
       {/* Footer */}
       <FooterCard />
    
    </div>
  );
}

export default App;
