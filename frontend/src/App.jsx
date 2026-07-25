// import { motion } from "framer-motion"
import { WhyFoundersChoose } from "./components/WhyFoundersChoose"
import { HowWeWork } from "./components/HowWeWork"
import { FeatureProjects } from "./components/FeatureProjects"
import { WhyHireInHouse } from "./components/WhyHireInHouse"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { WhoWeAre } from "./components/WhoWeAre"

function App() {
  return(
    <>
      <NavBar />
      <WhyFoundersChoose />
      <HowWeWork />
      <FeatureProjects />
      <WhyHireInHouse />
      <WhoWeAre />
      <Footer />
    </>
  )
}
export default App
