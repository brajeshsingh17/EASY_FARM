import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import slider1 from './Images/slider1.jpg';
//import slider2 from './Images/slider2.jpg';
//import slider3 from './Images/slider3.jpg';
//import p5 from '../../asset/Icons/sliderImages/p5.jpg';
//import p2 from '../../asset/Icons/sliderImages/p2.jpg';
//import p3 from '../../asset/Icons/sliderImages/p3.jpg';
// import p5 from './Images/p5.jpg';
// import p2 from './Images/p2.jpg';
// import p3 from './Images/p3.jpg';
import s1 from './Images/SliderImg1.png';
import s2 from './Images/SliderImg2.png';
import s3 from './Images/SliderImg3.png';
import s4 from './Images/SliderImg4.png';


const Sliders = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-3/4'>
                <Carousel>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s1}
                            alt="First slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s2}
                            alt="Second slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s3}
                            alt="Third slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s4}
                            alt="Fourth slide"
                        /></a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Sliders;