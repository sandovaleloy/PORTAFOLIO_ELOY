import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './particles-config'

const ParticlesBackground = ({theme}) => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
      },[])
    
  return (
    <div id={theme}>
        <Particles id={theme}
        options={particlesConfig}
        init={particlesInit}/>
    </div>
  )
}

export default ParticlesBackground