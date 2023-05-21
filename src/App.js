import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact';


export default function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Aboutme />
        <Project />
        <Skills /> 
        <Contact />
      </Container>
    </>
  );
}