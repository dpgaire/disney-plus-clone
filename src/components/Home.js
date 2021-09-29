import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies'

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies 
               title="Recommended For You"
               imgSrc="https://w0.peakpx.com/wallpaper/827/470/HD-wallpaper-alvin-simon-theodore-alvin-simon-theodore-cartoons.jpg"
            />
            <Movies
                title="New To Disney +"
               imgSrc="https://fitsoffury.files.wordpress.com/2019/02/alvin-and-the-chipmunks-chipwrecked.jpg"                          
            />
            <Movies 
                title="Orginals"
                imgSrc="https://i.ytimg.com/vi/3JX-6Z7ExCU/maxresdefault.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.main `
    min-height:calc(100vh - 70px);
    pading:0 calc(3.5vh + 5px);
    position:relative;
    overflow-x:hidden;
   

    &:before{
        background:url('images/home-background.png') center center /cover no-repeat fixed;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom:0;
        position:absolute;
        z-index:-1;
    }
   
`