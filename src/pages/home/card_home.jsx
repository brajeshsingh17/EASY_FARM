import "./card_home.css"
import card1 from "./Images/card1.png";
import card2 from "./Images/card2.png";
import card3 from "./Images/card3.png";
import card4 from "./Images/card4.png";

function Card_Home() {
    return (
        <div className="back-ground-home" >
            <div className="card-container-home">
                <div className="image-container-home">
                    <img src={card1} alt="" />
                </div>
                <div className="card-content-home">
                    <div className="card-body">
                    <button><a style={{ textDecoration: 'none' }} href={'/view'}>Explore More</a></button>
                    </div>
                </div>
            </div>
            <div className="card-container-home">
                <div className="image-container1-home">
                    <img src={card2} alt="" />
                    <div className="card-body">
                    <button><a style={{ textDecoration: 'none' }} href={'/view'}>Explore More</a></button>
                    </div>
                </div>
            </div>
            <div className="card-container-home">
                <div className="image-container2-home">
                    <img src={card3} alt="" />
                    <div className="card-body">
                    <button><a style={{ textDecoration: 'none' }} href={'/view'}>Explore More</a></button>
                    </div>
                </div>
            </div>
            <div className="card-container-home">
                <div className="image-container2-home">
                    <img src={card4} alt="" />
                    <div className="card-body">
                    <button><a style={{ textDecoration: 'none' }} href={'/view'}>Explore More</a></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
export default Card_Home