import React from 'react'

const Card = ({data}) => {
    

  return (
    <div className='bg-pink-500 h-screen   '>

      <div className='h-80 w-60 bg-amber-400 rounded-3xl mt-10 ml-2'>
        <img className='h-60 w-60 rounded-3xl  '  src={data.profilePic} alt="" />
        <h1 className='text-2xl pl-1'> {data.userName} </h1>
        <h2 className=' pl-1 '>{data.email} </h2>
      </div>
    </div>
  )
}

export default Card
