import React from 'react';
import './Slider.css'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carousel = () => {
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <button className='ml-10' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
        nextArrow: <button className='mr-10' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
    }

    const imageCarousel = [
        { imageUrl: "bg-firstImage", slideDetail: "Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1" },
        { imageUrl: "bg-secondImage", slideDetail: "Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2 " },
        { imageUrl: "bg-thirdImage", slideDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { imageUrl: "bg-forthImage", slideDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { imageUrl: "bg-fifthImage", slideDetail: "Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide  2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2Slide 2 " },
    ]


    return (
        <Zoom scale={1.4} autoplay={true} canSwipe={true}  {...properties}>
            {imageCarousel.map((data) => (<div className="each-slide-effect overflow-hidden">
                <div className={`${data.imageUrl} bg-firstImage  flex w-full`}>
                    <span className='flex flex-wrap max-w-40 lg:max-w-screen-md sm:max-w-96 justify-center text-white'>{data.slideDetail}</span>
                </div>
            </div>))}
        </Zoom>
    );
};

export default Carousel;