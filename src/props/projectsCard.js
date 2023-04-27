import React from 'react'
import { Tabs, Tab, Card, Button, Row, Col, Container, Stack } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function ProjectsCard({project}) {
  return (
    <motion.div layout 
        animate={{opacity:1, scale: 1}}
        initial={{opacity:0, scale:0}}
        exit={{opacity:0, scale:0}}>
        <Card
            style={{
                width: project.width === "long" ? "35rem" : "25rem",
                height:"13rem",
                backgroundColor:"white",
                overflow:"hidden"
            }}>
            <Card.Body style={{height:"100%"}}>
                <Stack direction="horizontal" style={{height:"100%"}}>
                {project.img && 
                    <Container style={{height:"100%", textAlign:"center", width:"auto"}}>
                        <Card.Img 
                            style={{height:"100%", width:"auto"}}
                            src={process.env.PUBLIC_URL+project.img}/>
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
  )
}
