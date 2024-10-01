import React from 'react'
import Landing from './Landing'
import Welcome from './Welcome'
import GastronomicIllusion from './GastronomicIllusion'
import Cta from './Cta'
import Contact from './Contact'
import Gallery from './Gallery'

function Home() {
  return (
    <div>
      <Landing />
      <Welcome />
      <GastronomicIllusion />
      <Cta />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home