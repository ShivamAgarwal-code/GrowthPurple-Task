import React, { useState, useEffect } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { BsExclamationCircle } from 'react-icons/bs'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import tests from '../services/data'
import { RxCross2 } from 'react-icons/rx'
import { PiRectangleDashed } from 'react-icons/pi'
import { IoLocationSharp } from 'react-icons/io5'

const Module = () => {
    const { id } = useParams();
    const [test, setTest] = useState(null);
    const [preview, setPreview] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const navigate = useNavigate();
    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    useEffect(() => {
        const data = tests.find((test) => test.testId === id);
        setTest(data);
    }, [id]);

    if (!test) return <div>Loading...</div>;

    const handleNextQuestion = () => {
        setQuestionIndex((prevIndex) => (prevIndex + 1) % test.questions.length);
    };

    const togglePreview = () => {
        setPreview(!preview);
    };

    const currentQuestion = test.questions[questionIndex];

    return (
        <div className='relative flex flex-col w-full h-screen justify-between'>
            <div className='px-14'>
                {/* Module header */}
                <div className='mt-0.5 flex flex-wrap items-center justify-between border-2 border-gray-200 px-8 pt-4 pb-2 rounded-b-3xl'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold '>{test.testTitle}</h3>
                        <span className='flex items-center'>Directions<BiChevronDown/></span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold text-xl'>{test.time}</span>
                        <button className='font-semibold border-2 border-gray-500 rounded-xl px-3 text-sm hover:bg-gray-100'>hide</button>
                    </div>
                    <button className='font-semibold border-2 border-gray-500 rounded-3xl px-8 text-lg hover:bg-gray-100' onClick={() => navigate('../')}>Save & Exit</button>
                </div>

                {/* Question part */}
                <div className='flex py-10 divide-x-2 divide-gray-100 h-full flex-wrap'>
                    <div className='w-1/2 px-2'>
                        {currentQuestion.description}
                    </div>
                    <div className='w-1/2 flex flex-col gap-5 pl-8'>
                        <div className='flex items-center justify-between bg-gray-100 rounded-full pr-6'>
                            <div className='flex items-center'>
                                <span className='bg-black text-white w-11 h-11 flex items-center justify-center rounded-b-full rounded-l-full'><span>{questionIndex + 1}</span></span>
                                <button className='flex items-center gap-3 ml-3 font-semibold'><FaRegBookmark className='w-5 h-5'/>Mark for Review</button>
                            </div>
                            <button className='font-semibold border-2 border-gray-500 bg-white rounded-xl px-3 text-sm hover:bg-gray-100 line-through'>ABC</button>
                        </div>
                        <p>{currentQuestion.title}</p>
                        <div className='flex flex-col gap-4'>
                            {/* all options */}
                            {currentQuestion.options.map((option, index) => (
                                <div className='flex border rounded-full p-1 items-center gap-5' key={index}>
                                    <span style={{backgroundColor: "#E4E4E4"}} className='w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg'>{alphabets[index]}</span>
                                    <span>{option.title}</span>
                                </div>
                            ))}
                            <div className='flex justify-end mt-10'>
                                <span className='flex items-center gap-2 text-gray-400'><BsExclamationCircle/>Report Error</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Module Footer */}
            <div className='relative flex flex-col justify-center items-center w-full flex-wrap'>
                <div className={`absolute bottom-20 right-50 flex flex-col gap-4 border-2 p-4 bg-white ${preview ? 'visible' : 'invisible'}`}>
                    <div className='flex items-center w-96 justify-between pl-10'>
                        <h1 className='font-semibold'>{test.testTitle}</h1>
                        <span><RxCross2 className='w-5 h-5 cursor-pointer' onClick={togglePreview} /></span>
                    </div>
                    <div className='border-y-2 py-2 flex justify-between'>
                        <span className='flex items-center gap-1'><IoLocationSharp /> Current</span>
                        <span className='flex items-center gap-1'><PiRectangleDashed />Unanswered</span>
                        <span className='flex items-center gap-1'><FaBookmark className='text-yellow-300' />Mark for Review</span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {test.questions.map((_, index) => (
                            <div className='flex flex-col justify-center items-center gap-1' key={index}>
                                <IoLocationSharp className={`${questionIndex !== index ? 'invisible' : ''}`} />
                                <button className={`border-2 border-dashed px-2 `} onClick={() => setQuestionIndex(index)}>
                                    {index + 1}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button className='border-2 px-2 rounded-full text-blue-500 font-semibold text-sm border-blue-500'>Go to Review Page</button>
                    </div>
                </div>
                <div className='border-t-2 mt-5 w-full flex items-center justify-between px-12 py-4'>
                    <h2 className='font-bold'>DSAT Practice Test 1</h2>
                    <button className='flex items-center gap-1 text-sm font-semibold border-2 rounded-3xl px-2 py-1' onClick={togglePreview}>
                        Question {questionIndex + 1} of {test.questions.length} {preview ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                    <button style={{backgroundColor: '#5057FF'}} className='px-4 py-2 flex items-center rounded-3xl text-white font-semibold' onClick={handleNextQuestion}>Next <HiChevronRight className='w-6 h-6' /></button>
                </div>
            </div>
        </div>
    );
};

export default Module;
