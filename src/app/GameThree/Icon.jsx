"use client"
import React from 'react'
import {motion} from 'framer-motion'


const Icon = ({item,index,handleClick}) => {
  return (
    <motion.div
    onClick={()=> handleClick(index)}
    className="item" >
     <motion.span 
     initial={{scale:0}}
     animate={{scale:1.1}}
     transition={{duration:2}}    
     >{item}</motion.span> 
    </motion.div>
  )
}

export default Icon