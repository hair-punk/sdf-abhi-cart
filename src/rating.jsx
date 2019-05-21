import React from 'react';
import {Stars} from './stars.jsx';

 export var Rating  = function (props){

  
    return  (
    <div className="tjn-flex tjn-flex-row">
    <a href="https://www.etsy.com/shop/SeaminglyPossible?ref=simple-shop-header-name&listing_id=512152848">{props.storeName}</a> <Stars starAvg={props.stars}/> ({props.numStars})
    </div>
  )
  // number of reviews = {props.numStars} average reveiw = {props.stars} / 5
}

// import React from 'react';

// export var Main = () =>  (
//     <div><h1>I fry dumplings</h1></div>
//   )

{/* <i className="fas fa-star"></i> // full star
<i className="fas fa-star-half-alt"></i> //half-empty star
<i className="far fa-star"></i> // empty star */}

