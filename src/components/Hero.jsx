import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
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
        </div>

        </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero