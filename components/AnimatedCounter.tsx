'use client'
import React from 'react'
import CountUp from 'react-countup'



const AnimatedCounter = ({ amount }:{ amount : number }) => {
  return (
        <div className="w-full">
            <CountUp 
                decimals={2}
                start={0}
                decimal=','
                prefix='Rs '
                end={amount}
            />
        </div>  
  )
}

export default AnimatedCounter
