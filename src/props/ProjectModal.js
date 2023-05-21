import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

function ProjectModal({ isOpen, onRequestClose, project}) {

    useEffect(() => {
        console.log('isOpen:', isOpen);
      }, [isOpen]);
    
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="project-modal__content">
        {project.title}
        <p>Sentence 1</p>
        <p>Sentence 2</p>
        <p>Sentence 3</p>
        <p>Sentence 4</p>
        <p>Sentence 5</p>
      </div>
    </ReactModal>
  );
}

export default ProjectModal;