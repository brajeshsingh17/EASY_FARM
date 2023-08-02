import React from 'react'
//import I2 from "./I2.png"
import { Link } from 'react-router-dom';

export default function CardView(props) {
   
    let { title,Price, rupess,images } = props
    return (
        <div className="cardV">
             <div className="warpperV">
               
               <div className="card_img"><img src={images}></img></div>
               
               <div className="cardInfo">
                   <h1>{title}</h1>
                  
                   <div className="action">
                       <div className="priceGroup">
                          
                           <p className="price newPrice">{rupess}{Price}</p>
                          
                       </div> <button className="buyButton"><Link className='no-underline text-white' to="/cart">BUY</Link></button>
                       <div className="cart">
                       <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                       <Link to='/cart'>
                               <path d="M2 6h10l10 40h32l8-24H16"></path>
                               <circle cx="23" cy="54" r="4"></circle>
                               <circle cx="49" cy="54" r="4"></circle>
                               </Link>
                           </svg>
                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
        )
    }