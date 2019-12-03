import React, { useEffect, useState } from 'react'

const Page = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <div>{counter}</div>
}

export default Page
