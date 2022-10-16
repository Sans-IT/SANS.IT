import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        {/* <svg className='position-absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L120,58.7C240,85,480,139,720,144C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
        <Services />
        <Portofolio />
        <Footer />
    </div>
  );
}

export default App;