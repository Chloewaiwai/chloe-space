import React from 'react'
import { Image} from 'react-bootstrap';


export default function AboutImg() {
  return (
    <Image
        src={process.env.PUBLIC_URL + '/me.png'}
        alt="chloe's icon"
        roundedCircle
        fluid
        style={{ width: '50%', height: 'auto'}}
    />
  )
}
