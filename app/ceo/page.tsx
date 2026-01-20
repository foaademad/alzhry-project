import React from 'react'
import page from '../page'
import CeoHero from './ceoHero'
import AboutCeo from './aboutCeo'
import CeoMemberships from './CeoMemberships'
import AboutCeoFinal from './AboutCeoFinal'


const ceo = () => {
  return (
    <div>
      <CeoHero/>
      <AboutCeo/>
      <CeoMemberships/>
      <AboutCeoFinal/>
    </div>
  )
}

export default ceo
