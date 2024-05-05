import About from "./components/About"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Team from "./components/Team"
import Footer from "./components/Footer"
import Button from "./components/Button/Button"
import Contacts from "./components/Contacts"
import Price from "./components/Price"
import Register from "./components/Forms/Register"
import Login from "./components/Forms/Login"
import Record from "./components/Forms/Record"
export default function App() {
  return (
    <>
      <NavBar/>
      <Button/>
      <HeroSection/>
      <About/>
      <Team/>
      <Price list={[{title: 'Senior'}, {title: 'Barber'}, {title: 'Junior'}]}/>
      <Contacts/>
      <Footer/>
     {/* <Login/> */}
     {/* <Register/> */}
     {/* <Record/> */}
    </>
  )
}