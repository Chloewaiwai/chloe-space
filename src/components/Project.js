import React from 'react'
import './Project.css'
import { Tabs, Tab, Card, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function Project() {
  const [activeTab, setActiveTab] = useState('all');

  function handleTabSelect(tabName) {
    setActiveTab(tabName);
  }

  const projects = [
    {
      title: 'Project 1',
      type: 'design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Project 2',
      type: 'website',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      title: 'Project 3',
      type: 'drawings',
      description: 'Suspendisse ac enim euismod, bibendum ex eget, molestie justo.'
    },
    {
      title: 'Project 4',
      type: 'design',
      description: 'Nam consectetur orci non sapien tristique, nec bibendum nunc semper.'
    },
    {
      title: 'Project 5',
      type: 'website',
      description: 'Fusce convallis eros sit amet odio sagittis, vel eleifend tortor convallis.'
    },
    {
      title: 'Project 6',
      type: 'drawings',
      description: 'Integer bibendum ipsum a velit tristique, eu sagittis ligula bibendum.'
    }
  ];
  return (
    <Row id="projects" style={{ height: '100vh' , flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
    <Col style={{ backgroundColor: '#323239', flex:1 , paddingTop:100 }}>
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} style={{ justifyContent: "center", border:"none" }}>
        <Tab eventKey="all" title="All"></Tab>
        <Tab eventKey="design" title="Design"></Tab>
        <Tab eventKey="website" title="Website"></Tab>
        <Tab eventKey="drawings" title="Drawings"></Tab>
      </Tabs>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>
        {projects
          .filter((project) => activeTab === 'all' || project.type === activeTab)
          .map((project, index) => (
            <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Col>
  </Row>
  )
}
