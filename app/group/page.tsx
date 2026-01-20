import React from 'react'
import HeroGroup from './heroGroup'
import AboutGroup from './AboutGroup'
import { Bus } from 'lucide-react'
import BusinessCounter from './BusinessCounter'
import WhatChooseUs from './WhatChooseUs'
import AboutGroupHero from './ceoHero'

function group() {
  return (
    <div>
        <AboutGroupHero />
        
        <AboutGroup/>
        <BusinessCounter/>
        <WhatChooseUs/>
    </div>

  )
}

export default group