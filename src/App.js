import './App.css';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Customcard from './Sections/Customcard/Customcard';
import Banner from './Sections/Banner/Banner';
import Features from './Sections/Features/Features';

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Banner />
        <Customcard />
        <Features />
      </Container>
      <Footer />
    </>
  );
}

export default App;
