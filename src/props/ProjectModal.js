import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ProjectCarousel from './ProjectCarousel';
import { Row, Col, Container } from 'react-bootstrap';

export default function ProjectModal(props) {
  const { project, show, onHide } = props;

  return (
    <Modal
    show={show} onHide={onHide}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    style={{ color: 'black' }}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {project.title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Container>
          <Row>
            <Col xs={12} md={12} lg={8}>
              {project.imgList && <ProjectCarousel projectimgs={project.imgList} />}
            </Col>
            <Col xs={12} md={12} lg={4} style={{display: "flex", alignContent: "center", flexWrap: "wrap"}}>
              <div style={{ whiteSpace: 'pre-line' }}>
                {project.detailDesc}
              </div>
            </Col>
          </Row>

        </Container>
      
    </Modal.Body>
  </Modal>
  );
}

