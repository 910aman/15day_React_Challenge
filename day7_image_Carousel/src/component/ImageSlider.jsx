import React from 'react';
import './Slider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageSlider = () => {

   
    return (
        <Slide autoplay={false}>
            <div className="each-slide-effect">
                <div className='bg-firstImage h-full min-h-full flex'>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='bg-secondImage'>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='bg-thirdImage'>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default ImageSlider;