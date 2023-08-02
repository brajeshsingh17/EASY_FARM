import React from 'react'
//import I1 from "./I1.png"
import { Link } from 'react-router-dom';

export default function Rent_Card(props) {
    let { title,Price, rupess,images } = props
    return (

        <div className="Rcard">
            <div className="Rwarpper">
                
                <div className="Rcard_img"><img src={images}></img></div>
            
                <div className="RcardInfo">
                    <h1>{title}</h1>
                   
                    <div className="Raction">
                        <div className="RpriceGroup">
                           
                            <p className="Rprice newPrice">{rupess}{Price}</p>
                        </div>
                        <button className="rentButton"><Link className='no-underline text-white' to="/cart">RENT</Link></button>
                        <div className="Rcart">
                        <svg className="RoutCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
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