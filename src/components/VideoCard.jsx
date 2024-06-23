import React from 'react'

const VideoCard = (props) => {
  return (
    <div className='p-3'>
        <img className='rounded-xl' src={props.thumbnail}></img>
        <div className='grid grid-cols-12 pt-2 '>
            <div className='col-span-1'>
            <img className={"rounded-full w-12 h-10"} src={props.channel}></img>
            </div>
        <div className='col-span-10 pl-2'>
            <div>
        {props.title}
        </div>
        <div className='col-span-10 text-gray-600 text-base'>
        {props.author}
        </div>
        <div className='col-span-10 text-gray-600 text-base'>
        {props.views}|{props.timestamp}
        </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default VideoCard
