import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showStatus={false} showThumbs={false} className="carousel-home-slider">
                <div>
                    <img className="img-fluid right-img" src="./img/right.png" />
                </div>
                <div>
                    <img className="img-fluid right-img" src="./img/right.png" />
                </div>
                <div>
                    <img className="img-fluid right-img" src="./img/right.png" />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;