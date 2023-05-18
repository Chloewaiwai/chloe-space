import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function MyInfo() {



  return (
    <div className='my-info'>
        <div style={{display:"flex", flexDirection:"column", height:"100%", justifyContent:"space-around"}}>
            <Row style={{ alignItems:"center"}}>
            <Col xs={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#323239",}} />
            </Col>
            <Col style={{color: "#323239"}}>chloe.yippw@gmail.com</Col>  
            </Row>
            <Row style={{ alignItems:"center"}}>
                <Col xs={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#323239",}} />
                </Col>
                <Col style={{color: "#323239"}}>Chloewaiwai</Col>
            </Row>
            <Row style={{alignItems:"center"}}>
                <Col xs={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#323239",}} />
                </Col>
                <Col style={{color: "#323239"}}>Yip Chloe</Col>
            </Row>

        </div>
        
    </div>
  )
}
