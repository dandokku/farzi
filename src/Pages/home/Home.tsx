import React from 'react'
import Landing from './Landing'
import Welcome from './Welcome'
import GastronomicIllusion from './GastronomicIllusion'
import Cta from './Cta'

function Home() {
  return (
    <div>
      <Landing />
      <Welcome />
      <GastronomicIllusion />
      {/* <Cta /> */}
    </div>
  )
}

export default Home