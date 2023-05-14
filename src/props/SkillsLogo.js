import React from 'react'
import { Image } from 'react-bootstrap';

export default function SkillsLogo({index, item}) {
  return (
    <Image 
        key={index}
        src={process.env.PUBLIC_URL + item.src} 
        alt={item.alt} 
        roundedCircle fluid 
        style={{ width: 25, marginRight:10}} />
  )
}
