import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Card, Container, Stack, Image } from 'react-bootstrap';
import { motion} from "framer-motion";

export default function ProjectsCard({project}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <motion.div layout 
            animate={{opacity:1, scale: 1}}
            initial={{opacity:0, scale:0}}
            exit={{opacity:0, scale:0}}
            >
            <Card
                className='projectCard'
                style={{
                    width: project.width === "long" ? "35rem" : "25rem",
                    height:"13rem",
                    backgroundColor:"white",
                    overflow:"hidden"}}
                onClick={() => setModalIsOpen(true)}>
                
                <Card.Body style={{height:"100%"}}>
                    <Stack direction="horizontal" style={{height:"100%"}}>
                    {project.img && 
                        <Container style={{height:"100%", textAlign:"center"}}>
                            <Image
                                style={{height:"100%", width:"auto"}}
                                src={process.env.PUBLIC_URL + project.img}/>
                        </Container>}
                        <Stack style={{justifyContent:"center"}}>
                            <Card.Title style={{color:"#323239", fontWeight:600}}>{project.title}</Card.Title>
                            {project.semiDescription && 
                            <Card.Title style={{color:"#323239",fontSize:15}}>{project.semiDescription}</Card.Title>
                            }
                            <Card.Text style={{color:"#323239"}}>{project.description}</Card.Text>
                            <Card.Text style={{color:"#fdb2b7", fontSize:10}}>{project.application}</Card.Text>
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card>
        </motion.div>
        <ProjectModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} project={project}/>
        
        </>
    )
}
