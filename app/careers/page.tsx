import React from 'react'
import HiringHero from './HiringHero'
import App from 'next/app'
import ApplySection from './ApplySection'
import ContactCards from '../Home/contactCard'

const careers = () => {
  return (
    <div>
       <HiringHero/>
        <ContactCards/>
       <ApplySection/>
    
    </div>
  )
}

export default careers
