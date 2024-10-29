import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import profile from '../assets/pradeep.png'
// import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-center text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Pradeep</span>
          </h1>
          <p className={`${styles.heroSubText} text-center mt-2 text-white-100`}>
            Full Stack Web Developer
          </p>
          <div className='flex justify-center items-center '>
          <div className="relative inline-block">
  {/* Image with SVG filter for outline */}
  <svg className="absolute -z-10">
    <filter id="outline">
      <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="outline" />
      <feFlood floodColor="purple" />
      <feComposite in2="outline" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </svg>
  <img
    src={profile}
    className="lg:w-[800px] w-[900px] h-[400px] lg:h-[600px] object-cover object-top"
    alt=""
    style={{ filter: 'url(#outline)' }} // Applying the outline filter
  />
</div>
          </div>
        </div>

        </div>
        {/* <ComputersCanvas /> */}
    </section>
  )
}

export default Hero