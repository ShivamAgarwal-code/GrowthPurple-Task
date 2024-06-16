import React from 'react'
import Test from '../components/Test'
import tests from '../services/data'

const HomePage = () => {
  return (
    <div className='bg-primary-bg w-screen h-screen flex items-center justify-center'>
        <div className='w-full flex flex-col gap-8 px-48'>
            <h1 className='text-3xl font-bold'>Math</h1>

            <div className='flex flex-wrap gap-6'>
                {/* test component */}
                {
                  tests.map((test, index) => 
                    <Test key={index} test={test}/>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default HomePage