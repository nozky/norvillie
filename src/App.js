
import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Education from './components/Education';
import Skills from './components/Skills';
import Acheivement from './components/Achievement'
import {links} from './components/data/links'

function App() {

  return (
    <div className="app">
      <Header links={links}/>
      <Main />
      <About />
      <Works />
      <Skills />
      <Education />
      <Acheivement />
      <Contact />
      <Footer links={links} />
    </div>
  );
}

export default App;
