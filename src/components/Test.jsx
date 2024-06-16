import React from 'react'
import { IoIosLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Test = (props) => {
  const navigate = useNavigate();
  return (
    <div className=' bg-white p-6 rounded-2xl w-96 shadow-xl shadow-blue-100'>
      <h3 className='font-bold text-lg'>{props.test.testTitle}</h3>
      <div className='flex mt-1 p-0.5 items-center'>
          <div className='border-secondary-bg border-2 rounded-full z-20 p-2'>
              <IoIosLock/>
          </div>
          <p className='-ml-0.5 text-sm bg-secondary-bg rounded-r-xl px-1 pr-4m'>My Progress 0 / {props.test.questions.length || 0}</p>
      </div>
      <div className=' w-full flex justify-end'>
      <button className='bg-button-bg mt-6 px-8 py-1.5 text-white font-semibold rounded-lg hover:bg-blue-700' onClick={()=> navigate(`/test/${props.test.testId}`)}>Start</button>
      </div>
    </div>
  )
}

export default Test