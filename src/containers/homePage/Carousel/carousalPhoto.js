import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {showSlides,plusSlides,currentSlide} from './fun'
import './carosalPhoto.css'
class CarouselPhoto extends Component {
    
    render() {
        var slideIndex = 1;

        // Next/previous controls
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        }

        const showSlides = (n) => {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
        // return (
        //     <div className="container">
        //         {/* Full-width images with number text */}
        //         <div className="mySlides">
        //             <div className="numbertext">1 / 6</div>
        //             <img src="img_woods_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         <div className="mySlides">
        //             <div className="numbertext">2 / 6</div>
        //             <img src="img_5terre_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         <div className="mySlides">
        //             <div className="numbertext">3 / 6</div>
        //             <img src="img_mountains_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         <div className="mySlides">
        //             <div className="numbertext">4 / 6</div>
        //             <img src="img_lights_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         <div className="mySlides">
        //             <div className="numbertext">5 / 6</div>
        //             <img src="img_nature_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         <div className="mySlides">
        //             <div className="numbertext">6 / 6</div>
        //             <img src="img_snow_wide.jpg" style={{ width: '100%' }} />
        //         </div>
        //         {/* Next and previous buttons */}
        //         <a className="prev" onClick={plusSlides(-1)}>❮</a>
        //         <a className="next" onClick={plusSlides(1)}>❯</a>
        //         {/* Image text */}
        //         <div className="caption-container">
        //             <p id="caption" />
        //         </div>
        //         {/* Thumbnail images */}
        //         <div className="row">
        //             <div className="column">
        //                 <img className="demo cursor" src="img_woods.jpg" style={{ width: '100%' }} onClick={currentSlide(1)} alt="The Woods" />
        //             </div>
        //             <div className="column">
        //                 <img className="demo cursor" src="img_5terre.jpg" style={{ width: '100%' }} onClick={currentSlide(2)} alt="Cinque Terre" />
        //             </div>
        //             <div className="column">
        //                 <img className="demo cursor" src="img_mountains.jpg" style={{ width: '100%' }} onClick={currentSlide(3)} alt="Mountains and fjords" />
        //             </div>
        //             <div className="column">
        //                 <img className="demo cursor" src="img_lights.jpg" style={{ width: '100%' }} onClick={currentSlide(4)} alt="Northern Lights" />
        //             </div>
        //             <div className="column">
        //                 <img className="demo cursor" src="img_nature.jpg" style={{ width: '100%' }} onClick={currentSlide(5)} alt="Nature and sunrise" />
        //             </div>
        //             <div className="column">
        //                 <img className="demo cursor" src="img_snow.jpg" style={{ width: '100%' }} onClick={currentSlide(6)} alt="Snowy Mountains" />
        //             </div>
        //         </div>
        //     </div>
        // )
        return (
            <div className="PhotoCarosalContainer">
                {this.props.data.map((el, i) => {
                    return (
                        <div className={i == 0 ? "mySlides active" : "mySlides"} style={{ display: i == 0 ? "block" : "none" }}>
                            <div className="numbertext " >{i} / {this.props.data.length}</div>
                            <img src={el.src} style={{ width: '100%' }} />
                        </div>
                    )
                })}

                {/* Next and previous buttons */}
                <a className="prev" onClick={() => { plusSlides(-1) }}>❮</a>
                <a className="next" onClick={() => { plusSlides(1) }}>❯</a>
                {/* Image text */}
                <div className="caption-container">
                    <p id="caption" />
                </div>
                {/* Thumbnail images */}
                <div className="rowCarouselPhoto">
                    {this.props.data.map((el ,i)=> {
                        return (
                            <div className="columnCarouselPhoto">
                                <img className="demo cursor" src={el.src} style={{ width: '100%' }} onClick={() => { currentSlide(i+1)}} alt={el.paragraph} />
                            </div>
                        )
                    })}

                </div>
            </div>
        )
        return (
            <div id="warp">
                <ul id="gallery-container">

                    {this.props.data.map((el, i) => {
                        return (
                            <li className="gallery-item">
                                <input defaultChecked="checked" type="radio" name="gallery-list" className="gallery-selector" defaultValue={`${i}.jpg`} id="gallery-item1" />
                                <img src={el.src} className="gallery-fullsize" alt="location bateau 135ch" />
                                <label htmlFor="gallery-item1" className="gallery-label">
                                    <img src={el.src} className="gallery-preview" alt="location bateau 135ch" />
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
        return (
            <div  >
                <Carousel  >

                    {this.props.data.map(el => {
                        return <div  >
                            <img src={el.src} />
                            <p className="legend">{el.paragraph}</p>
                        </div>
                    })}

                </Carousel>
            </div>
        )
    }
}

export default CarouselPhoto