import './App.css'
import AboutSection from './components/AboutSection'
import BannerSection from './components/BannerSection'
import Carousel from './components/Carousel'
import ContactSection from './components/ContactSection'
import HeaderBottom from './components/HeaderBottom'
import HeaderTop from './components/HeaderTop'
import Problems from './components/Problems'
import { Service } from './components/Service'

function App() {

  return (
    <> 
    <HeaderTop />
    <HeaderBottom />
    <BannerSection />
    <Carousel />
    <AboutSection />
    <Service />
    <Problems/>
    <ContactSection/>
    </>
  )
}

export default App
