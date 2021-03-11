import './App.css'
import {Container, Navbar} from "react-bootstrap"
import Footer from "./components/Footer"
import PortfolioNavbar from './components/PortfolioNavbar'
import About from './components/about/About'
import Work from './components/work/Work'
import {Helmet} from "react-helmet"
import logo from './logo.svg'

function App() {
  return (
     <Container>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Rajat Kumar Gupta</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <PortfolioNavbar></PortfolioNavbar>
     </Container>
  );
}

export default App;
