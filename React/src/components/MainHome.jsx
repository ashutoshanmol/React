import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import AboutSection from './AboutSection'
import BlogCards from './BlogCards'
import Contact from './Contact'
import Clients from './Clients'
import FAQ from './FAQ'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'



const MainHome = () => {
  return (
    <div>
        
      <Slider/>
      <AboutSection/>
      <BlogCards/>
      <Clients/>
      <FAQ/>
      < WhyChooseUs/>
      
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default MainHome
