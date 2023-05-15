import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Project.css'
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import ProjectsCard from '../props/projectsCard';
import projects from '../miniDB';

export default function Project() {

  const filter = [
    {
      eventKey:"all",
      title:"All"
    },{
      eventKey:"design",
      title:"Design"
    },{
      eventKey:"website",
      title:"Website"
    },{
      eventKey:"project",
      title:"Project"
    },
  ]
  const [activeTab, setActiveTab] = useState('all');

  function handleTabSelect(tabName) {
    setActiveTab(tabName);
  }

  const tabRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      duration: 1000,
      distance: '30px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal(tabRef.current);
  }, []);

  return (
    <Row id="work" style={{ minHeight: '100vh' , flexDirection:"column",alignItems: "center" }}>
      <Col style={{ backgroundColor: '#4e4e58', flex:1 , paddingTop:120}}>
        <Container style={{ backgroundColor:"#323239", width:"66%", borderRadius:10, padding:5}} ref={tabRef}>
          <Tabs activeKey={activeTab} onSelect={handleTabSelect} style={{ justifyContent: "center", border:"none",gap:5 }}>
            {filter.map((tab, index) => (
              <Tab eventKey={tab.eventKey} title={tab.title} key={index}></Tab>
            ))}
          </Tabs>
        </Container>
        <Container>
          <motion.div 
            layout 
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center", gap:10, paddingTop:20 , paddingBottom:30}}>
          <AnimatePresence>
              {projects
                  .filter((project) => activeTab === "all" || project.type === activeTab)
                  .map((project) => {
                    return <ProjectsCard key={project.id} project={project}/>
                  })}
              </AnimatePresence>
          </motion.div >
        </Container>
      </Col>
    </Row>
  )
}
