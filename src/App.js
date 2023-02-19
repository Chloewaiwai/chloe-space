import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Project />
    </div>
  );
}

export default App;