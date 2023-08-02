import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../../asset/Icons/sliderImages/slider1.jpg';
import slider2 from '../../asset/Icons/sliderImages/slider2.jpg';
import slider3 from '../../asset/Icons/sliderImages/slider3.jpg';

const Sliders = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-3/4'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block rounded-xl"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-black'>Keep Ordering...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block rounded-xl"
                            src={slider2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>We are reachable at many places</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block rounded-xl"
                            src={slider3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>visit <span className='text-black'><a href="www.easyfarm.in" className='no-underline text-black '>www.easyfarm.in</a></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Sliders;