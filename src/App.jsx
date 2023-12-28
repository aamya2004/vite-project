import React, { useState } from 'react'

const App = () => {

  const [saidYes, setSaidYes] = useState(false)
  const [position,setPosition] = useState({x:0,y:0});
  const handleYes = () => {
    setSaidYes(true);
  }

  const handleHover = () => {
    const newX = Math.random() * (window.innerWidth/2);
    const newY = Math.random() * (window.innerHeight/2);
      setPosition({
        x: newX-100,
        y: newY-400,
      });
    
  }

  return (
    <>
    <div className='h-screen w-screen bg-purple-300 grid place-items-center text-xl'>
      <h1 className='text-7xl text-center text-white font-bold'>Do You love me?</h1>
      {
        saidYes ? <img src='https://photos.app.goo.gl/TzKgqmrNh3XEQ6v97' className='h-80 w-30'></img>:
      <img src='https://photos.app.goo.gl/Wnu4EjPnrG2uS4Ji7' className='h-80 w-30'></img>
      }
      Try Clicking No!!
      <div className='flex justify-around'>
        <button onClick={handleYes} className='bg-black text-white border-2 rounded-lg w-20 h-12 text-xl'>Yes</button>
        <button onMouseEnter={handleHover} style = {{ transform: `translate(${position.x}px, ${position.y}px)` }} className='bg-black text-white border-2 rounded-lg w-20 h-12 text-xl ml-4'>No</button>
      </div>
    </div>
    </>
  )
}

export default App