import React from 'react'
import SkillsLogo from './SkillsLogo';
import SkillsTag from './SkillsTag';

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
            type: "frontend",
            title: 'Next.js'
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
            src: '/figma.png',
            alt: "Figma"
        },{
            type: "design",
            title: "Blender"
        }
    ]

    const filteredLogo = logo.filter(item => item.type === type);

    return (
        <div style={{ display: "flex" }}>
            {filteredLogo.map((item, index) => {
                switch (item.type) {
                    case "frontend":
                        return (
                            <React.Fragment key={index}>
                                {item.title && <SkillsTag index={index} item={item} />}
                                {item.src && <SkillsLogo index={index} item={item} />}
                            </React.Fragment>
                        );
                    case "software":
                        return <SkillsLogo key={index} index={index} item={item} />;
                    case "ai":
                        return <SkillsTag key={index} index={index} item={item} />;
                    case "design":
                        return (
                            <React.Fragment key={index}>
                                {item.title && <SkillsTag index={index} item={item} />}
                                {item.src && <SkillsLogo index={index} item={item} />}
                            </React.Fragment>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    )
}

