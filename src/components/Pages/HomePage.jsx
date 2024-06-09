import About from "../About"
import HeroSection from "../HeroSection"
import NavBar from "../NavBar"
import Team from "../Team"
import Footer from "../Footer"
import Button from "../Button/Button"
import Contacts from "../Contacts"
import Price from "../Price"

import TeamDataProvider from "../DataProvider/TeamDataProvider"



const HomePage=()=> {
  return (
    <div className="overflow-hidden">
     
      <NavBar/>
      <Button/>
      <HeroSection />
      <About/>
      
      <TeamDataProvider>
      {(team) => <Team team={team} />}
      </TeamDataProvider>
      <Price list={[{title: 'Senior'}, {title: 'Barber'}, {title: 'Junior'}]}/>
      <Contacts/>
      <Footer/>
 
    </div>
  )
}
export default HomePage;