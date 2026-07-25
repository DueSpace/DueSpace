// import { motion } from "framer-motion"
import { WhyFoundersChoose } from "./components/WhyFoundersChoose"
import { HowWeWork } from "./components/HowWeWork"
import { FeatureProjects } from "./components/FeatureProjects"
import { WhyHireInHouse } from "./components/WhyHireInHouse"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"

function App() {
  return(
    <>
      <NavBar />
      <WhyFoundersChoose />
      <HowWeWork />
      <FeatureProjects />
      <WhyHireInHouse />
      <Footer />
    </>
  )
}
export default App
