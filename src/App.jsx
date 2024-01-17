
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Students from "./component/Students";


function App() {

  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <NavBar />
        <Hero />
        <Students/>
        <Footer/>
      </div>      
    </>
  )
}

export default App
