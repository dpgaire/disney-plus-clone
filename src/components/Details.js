import React from 'react'
import styled from 'styled-components';
function Details() {
    return (
        <Container>
            <Background>
                <img src="https://images.squarespace-cdn.com/content/v1/583ed05c59cc68a8c3e45c0f/1600856532768-ATU3GLRFMRJ395DCE94E/bao-animationscreencaps.com-793.jpg?format=2500w"/>
            </Background>
            <ImgTitle>
                <img src="/images/baoo.png"/>
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 7m Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Pick a movie or a show you'd like to watch and play it. With the playback on, click the Up button on your remote to bring up the menu icon, and select it. The Subtitles option appears in the menu, navigate to it, and press the selection button to choose between On and Off.
            </Description>
        </Container>
    )
}

export default Details

const Container=styled.div `
    min-height:calc(100vh -70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
   
`
const Background=styled.div `
    z-index:-1;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    opacity:0.6;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImgTitle=styled.div `
    height:30vh;
    width:35vw;
    min-width:200px;
    min-height:170px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls=styled.div `
    display:flex;
    align-items:center;
`

const PlayButton=styled.button `
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    cursor:pointer;
    height:56px;
    background:rgb(249,249,249);
    padding:0 24px;
    border:none;
    margin-right:24px;
    letter-spacing:1.8px;

    &:hover{
        background:rgb(198,198,198);
    }
`
const TrailerButton=styled(PlayButton) `
    background:rgba(0,0,0,0.3);
    color:rgb(249,249,249);
    border:1px solid rgb(249,249,249);
    text-transform:uppercase;
`

const AddButton=styled.button `
    width:44px;
    height:44px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background:rgba(0,0,0,0.6);
    border:2px solid white;
    margin-right:16px;

    span{
        font-size:30px;
        color:rgb(249,249,249);
    }
`

const GroupWatchButton=styled(AddButton)`
    background:rgb(0,0,0);
`
const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:18px;
    min-height:20px;
    margin-top:26px;

`
const Description=styled.div `
    color:rgb(249,249,249);
    line-height:1.4;
    width:800px;
    font-size:20px;
    margin-top:16px;
`