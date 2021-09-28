import React from 'react'
import styled from 'styled-components';
function Movies({title}) {
    return (
        <Container>
           <h4>{title}</h4>
          <Content>
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/827/470/HD-wallpaper-alvin-simon-theodore-alvin-simon-theodore-cartoons.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/827/470/HD-wallpaper-alvin-simon-theodore-alvin-simon-theodore-cartoons.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/827/470/HD-wallpaper-alvin-simon-theodore-alvin-simon-theodore-cartoons.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/827/470/HD-wallpaper-alvin-simon-theodore-alvin-simon-theodore-cartoons.jpg"/>
            </Wrap>
          </Content>
        </Container>
    )
}

export default Movies

const Container= styled.div `
    width:96%;
    margin:40px auto;
    padding:30px 0 26px;
`
const Content=styled.div `
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    grid-gap:25px;

`
const Wrap=styled.div `
    cursor:pointer;
    border-radius:10px;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 / 69%) 8px 26px 30px -10px,
               rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
`