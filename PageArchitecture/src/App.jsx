import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Proyects from './components/proyects/Proyects';
import "./App.css"
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="whiteGradient"/>
        <Header />
        <Hero />
      </div>
        <Proyects/>
        <Value/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;