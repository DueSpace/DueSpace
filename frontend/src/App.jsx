import { motion } from "framer-motion"

function App() {
  return(
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <motion.button 
        className="btn btn-primary btn-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hello DaisyUI and Framer-Motion
      </motion.button>
    </div>
  )
}
export default App
