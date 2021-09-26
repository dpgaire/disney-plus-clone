import React from 'react'
import  '../index.css'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a href="#">
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>

                <a href="#">
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a href="#">
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="#">
                    <img src="/images/original-icon.svg"/>
                    <span>ORGINALS</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://www.workingdads.co.uk/wp-content/uploads/2018/12/Duncan-Fisher-220x220.jpeg"/>
        </Nav>
    )
}

export default Header

const Nav=styled.nav `
    height:70px;
    background-color:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`
const Logo=styled.img `
    width:80px;
    cursor:pointer;
    `

const NavMenu =styled.div `
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
        a{
            display:flex;
            align-items:center;
            padding:0 12px;

             img{
                    height:20px;
                   
             }
             span{
                 font-size:13px;
                 letter-spacing:1.42px;
             }
        }
       
`
const UserImg=styled.img `
        height:48px;
        width:48px;
        border-radius:50%;
         cursor:pointer;
`