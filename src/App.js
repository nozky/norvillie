
import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {

  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Works />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
