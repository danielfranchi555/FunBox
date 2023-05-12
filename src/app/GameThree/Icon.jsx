"use client"
import React from 'react'
import {motion} from 'framer-motion'


const Icon = ({item,index,handleClick}) => {
  return (
    <motion.div
    initial={{ y: "-1000" }}
    animate={{ y:0 }}
    transition={{ duration: 1 }}
    style={{boxShadow:'10px 10px 10px '}}
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