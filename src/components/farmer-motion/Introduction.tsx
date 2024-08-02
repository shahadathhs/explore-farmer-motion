'use client'

import React from 'react'
import { motion } from "framer-motion"

export default function Introduction() {
  return (
    <div>
      <div className='border-2 min-h-[300px]'>
        <motion.div
          animate={{ x: 100 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5'>
          A DIV-X
        </motion.div>

        <motion.div
          animate={{ y: 100 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-Y
        </motion.div>

        <motion.div
          animate={{ rotate: -10 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-ROTATE
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-HOVER
        </motion.div>

        <motion.div
          whileTap={{ scale: 1.1 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-TAP
        </motion.div>

        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-DRAG
        </motion.div>

        <motion.div
          animate={{ x: 700 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-TRANSITION
        </motion.div>

        <motion.div
          animate={{ x: 100 }} initial={false}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-INITIAL
        </motion.div>

        <br />

        <motion.div
          animate={{ x: [0, 100, 0] }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5' >
          A DIV-KEYFRAME
        </motion.div>


        <svg width="600" height="200" className='border-2 m-2'>
          <motion.circle
            cx={500}
            cy={100}
            r={20}
            animate={{ cx: [500, 100, 300] }}
            transition={{ duration: 3, times: [0, 0.2, 1] }}
            style={{ fill: 'blue' }}
          />
        </svg>

        <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        className='text-2xl font-bold border inline-block p-2 m-5 border-black rounded-md shadow-lg'
        >
          FM BUTTON
        </motion.button>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='border-2 min-h-[300px] flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-2xl font-bold border-2 inline-block p-2 m-5'>
          A DIV-IN-VIEW
        </motion.div>

      </motion.div>
    </div>
  )
}
