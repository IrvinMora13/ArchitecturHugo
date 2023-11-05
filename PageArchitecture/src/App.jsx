import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Proyects from './components/proyects/Proyects';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
        <div className="whiteGradient"/>
        <Header />
        <Hero />
      </div>
        <Proyects/>
    </div>
  )
}

export default App;