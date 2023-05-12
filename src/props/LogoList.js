import React from 'react'
import { Container, Image} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function LogoList({name}) {
    const frontend = [
        {
            src: './html-5.png',
            alt: 'html'
        },{
            src: './css-3.png',
            alt: 'css'
        },{
            src: process.env.PUBLIC_URL + './js.png',
            alt: 'js'
        },{
            src: process.env.PUBLIC_URL + './atom.png',
            alt: 'react'
        },{
            src: process.env.PUBLIC_URL + './php.png',
            alt: 'php'
        },{
            src: process.env.PUBLIC_URL + './bootstrap.png',
            alt: 'bootstrap'
        }
    ]

    const software = [
        {
            src: './python.png',
            alt: 'python'
        },{
            src: './sql-server.png',
            alt: 'sql'
        },{
            src: process.env.PUBLIC_URL + './java.png',
            alt: 'java'
        }
    ]

    const ai = [
        {
            title: 'Pytorch'
        },{
            title: 'Tensorflow'
        },{
            title: 'NLP'
        }
    ]

  return (
    <>
        {name === "frontend" && 
            <>
            {frontend.map((logo) => 
                <Image 
                    src={process.env.PUBLIC_URL + logo.src} 
                    alt={logo.alt} roundedCircle fluid 
                    style={{ width: 25, marginRight:10}} />
                    )}
            </>}

        {name === "software" && 
            <>
            {software.map((logo) => 
                <Image 
                    src={process.env.PUBLIC_URL + logo.src} 
                    alt={logo.alt} roundedCircle fluid 
                    style={{ width: 25, marginRight:10}} />
                    )}
            </>}

        {name === "ai" && 
            <>
            {ai.map((item) => 
                <div style={{backgroundColor:"white", marginRight:5, borderRadius:5, width:100, padding:2}}>
                    <p style={{color:"black", marginBottom:0, textAlign:"center", fontSize:10}}>{item.title}</p>
                </div> )}
            </>}
    </>
  )
}
