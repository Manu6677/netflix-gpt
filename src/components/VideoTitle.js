import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='bg-gradient-to-r from-black w-screen aspect-video px-12 absolute text-white pt-[20%]'>
      <p className='text-4xl font-bold'>{title}</p>
      <p className='w-1/4 mt-3 py-6 text-lg'>{overview}</p>

      <div className='py-3 space-x-3 flex-row'>
        <button className='bg-slate-500 text-white rounded-md px-6 py-3 text-2xl hover:opacity-80'>▶️ Play</button>
        <button className='bg-slate-500 text-white rounded-md px-6 py-3 text-2xl'>Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

