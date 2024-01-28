import './App.css'
import Navbar from './assets/Navbar'
import { FaHome, FaInfoCircle, FaBlog, FaBriefcase } from "react-icons/fa";

function App() {

  const pages = [
    {
      pageName: "Home",
      pageRouter: () => {},
      pageIcon: <FaHome />
    },
    {
      pageName: "About",
      pageRouter: () => {},
      pageIcon: <FaInfoCircle />
    },
    {
      pageName: "Blog",
      pageRouter: () => {},
      pageIcon: <FaBlog />
    },
    {
      pageName: "Services",
      pageRouter: () => {},
      pageIcon: <FaBriefcase />
    }
  ]

  return (
    <div>
      <Navbar pages={pages}/>
    </div>
  )
}

export default App
