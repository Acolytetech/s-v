import React from 'react'
import Banner from './Banner'
import Profession from './Profession'
import NeonatologySection from './NeonatologySection'
import NeonatalTelehealth from './NeonatalTelehealth'
import CommanQ from './CommanQ'
// import CardContainer from './ourchannelpartner/CardContainer'

function Home() {
  return (
    <div>
      <Banner/>
      <NeonatologySection/>
      {/* <CardContainer/> */}
      <NeonatalTelehealth/>
      <Profession/>

      <CommanQ/>
    </div>
  )
}

export default Home
