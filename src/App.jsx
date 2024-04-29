import About from "./components/About"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Team from "./components/Team"
import Footer from "./components/Footer"
import Button from "./components/Button/Button"
import Contacts from "./components/Contacts"
import Price from "./components/Price"
import AnchorButton from "./components/Button/AnchorButton"
export default function App() {
  return (
    <h1 className="text-3xl font-bold">
      <NavBar/>
      <Button/>
      <AnchorButton/>
      <HeroSection/>
      <About/>
      <Team/>
      {/* <Price/> */}
      <Contacts/>
      <Footer/>

    </h1>
  )
}