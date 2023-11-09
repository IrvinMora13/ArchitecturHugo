import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Proyects from './components/proyects/Proyects';
import "./App.css"
import Value from './components/value/Value';

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
    </div>
  )
}

export default App;