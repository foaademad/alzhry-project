import React from 'react'
import ContactPage from './contacthero'
import ContactCards from '../Home/contactCard'
import ContactMap from './ContactMap'
import ContactInfoSection from './ContactInfoSection'
import ContactSection from './contactSection'
import AboutGroup from '../group/AboutGroup'

function page() {
  return (
    <div>
        <ContactPage/>
        <ContactSection/>
        <ContactMap/>
          <ContactCards/>
     
     
        
    </div>
  )
}

export default page