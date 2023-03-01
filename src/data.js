import React from 'react';
import {AiFillTwitterCircle,AiFillYoutube,AiFillFacebook,AiOutlineLinkedin} from 'react-icons/ai';


export const links = [
    {
        id :1,
        url:'/',
        text:'HOME'
    },
    {
        id :2,
        url:'/',
        text:'EXPLORE'
    },
    {
        id :3,
        url:'/',
        text:'CONTACT US'
    },
    {
        id :4,
        url:'/',
        text:'SERVICES'
    }
]
export const soials = [
    {
        id:1,
        url:'https://youtube.com',
        icon: <AiFillYoutube className='iconss'/>   
    }, 
    {
        id:2,
        url:'https://twitter.com',
        icon: <AiFillTwitterCircle className='iconss'/> 
    },
    {
        id:3,
        url:'https://linkedin.com',
        icon: <AiOutlineLinkedin className='iconss'/> 
    },
    {
        id:4,
        url:'https://facebook.com',
        icon: <AiFillFacebook className='iconss'/>
    }
]