import React from 'react'
//import I3 from "./I3.png"
import { Link } from 'react-router-dom';

export default function CardOrders(props) {
    
    let { title,Price, rupess,images,date} = props
    return (

        <div className="cardO">
            <div className="warpperO">
                <div className='card_imgO'><img src={images}></img></div>
                
                <div className="cardInfoO">
                    <h1>{title}</h1>
                     <h2 className='priceGroupO'>original price :{rupess}{Price}</h2>
                     <h2 className='priceGroupO'>delivered on :{date}</h2>

                    <div className="actionO">
                         
                        <button className="buyButton"><Link className='no-underline text-white' to="/cart">RENT</Link></button>
                        <button className="buyButton"><Link className='no-underline text-white' to="/cart">BUY</Link></button>
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