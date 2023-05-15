import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Aboutme />
         <Project />
        <Skills /> 
      </Container>
    </>
  );
}