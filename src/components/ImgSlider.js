import React from 'react'
import '../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    }

    return (
        <Carousel {...settings}>
           <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
           </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt=""/>
           </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt=""/>
           </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt=""/>
           </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider) `
    width:96%;
    margin:20px auto;

    .slick-list{
        overflow:visible;
    }
    ul li button{
        &:before {
            font-size:10px;
            color:#9c9b9b;
        }
    }
    .slick-dots li.slick-active button:before{
        color:white;
    }

    button{
        z-index:1;
    }

`
const Wrap =styled.div `
    cursor:pointer;
    display:block;
    width:100%;
    img{
        width: 100%;
        height: 100%;
        border-radius:4px;
        border:4px solid transparent;
        box-shadow:rgb(0 0 0 / 69%) 8px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

         &:hover {
            border:4px solid rgba(255,255,255,0.8);
        }
    }
   
`