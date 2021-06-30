import React,{useState} from "react";
//Fetching Star icon 
import {FaStar} from "react-icons/fa";

const StarRating = () =>{
    const [rating , setRating] = useState(null);
    const [hover,setHover] = useState(null);
    return(
        <>
        {/* mapping Star-icons */}
         {[...Array (5)].map((star,index)=>{
            //  adding value for Rating
             const ratingValue = index + 1;
             return(
                 <label>
                     <input
                     type="radio"
                     name="rating"
                     value={ratingValue}
                     onClick={()=> setRating(ratingValue)}
                     />
                     <FaStar 
                     className="star"
                     color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                     size={20}
                     onMouseEnter={()=> setHover(ratingValue)}
                     onMouseLeave={()=>setHover(null)}/>
                     </label>
             );
         })}
        </>
    );
}
export default StarRating ;