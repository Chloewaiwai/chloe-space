import React from 'react'
import { Container, Image} from 'react-bootstrap';

export default function LogoList({type}) {

    const logo = [
        {
            type: "frontend",
            src: '/html-5.png',
            alt: 'html'
        },{
            type: "frontend",
            src: '/css-3.png',
            alt: 'css'
        },{
            type: "frontend",
            src: '/js.png',
            alt: 'js'
        },{
            type: "frontend",
            src: '/atom.png',
            alt: 'react'
        },{
            type: "frontend",
            src: '/php.png',
            alt: 'php'
        },{
            type: "frontend",
            src: '/bootstrap.png',
            alt: 'bootstrap'
        },{
            type: "software",
            src: '/python.png',
            alt: 'python'
        },{
            type: "software",
            src: '/sql-server.png',
            alt: 'sql'
        },{
            type: "software",
            src: '/java.png',
            alt: 'java'
        },{
            type: "ai",
            title: 'Pytorch'
        },{
            type: "ai",
            title: 'Tensorflow'
        },{
            type: "ai",
            title: 'NLP'
        },{
            type: "design",
            src: '/photoshop.png',
            alt: "photoshop"
        },{
            type: "design",
            src: '/illustrator.png',
            alt: "illustrator"
        },{
            type: "design",
            title: "Blender"
        }
    ]

    const filteredLogo = logo.filter(item => item.type === type);

    console.log(logo)
    console.log(type)

    return (
        <div style={{display:"flex"}}>
            {filteredLogo.map((item, index) => 
                <>
                {item.type === "frontend" && 
                    <Image 
                        key={index}
                        src={process.env.PUBLIC_URL + item.src} 
                        alt={item.alt} 
                        roundedCircle fluid 
                        style={{ width: 25, marginRight:10}} />
                }
                {item.type === "software" && 
                    <Image 
                        key={index}
                        src={process.env.PUBLIC_URL + item.src} 
                        alt={item.alt} 
                        roundedCircle fluid 
                        style={{ width: 25, marginRight:10}} />
                }
                {item.type === "ai" && 
                    <div key={index} style={{backgroundColor:"white", marginRight:5, borderRadius:5, width:100, padding:2}}>
                        <p style={{color:"black", marginBottom:0, textAlign:"center", fontSize:10}}>{item.title}</p>
                    </div>
                }
                {item.type === "design" && 
                    <>
                    {item.title && 
                        <div key={index} style={{backgroundColor:"white", marginRight:5, borderRadius:5, width:100, padding:2}}>
                            <p style={{color:"black", marginBottom:0, textAlign:"center", fontSize:10}}>{item.title}</p>
                        </div>
                    }
                    {item.src && 
                        <Image 
                        key={index}
                        src={process.env.PUBLIC_URL + item.src} 
                        alt={item.alt} 
                        roundedCircle fluid 
                        style={{ width: 25, marginRight:10}} />
                    }
                    </>
                }</>
            )}
        </div>
    )
}