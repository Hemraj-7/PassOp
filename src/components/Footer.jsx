import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-xl">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div>
                <pre className='flex justify-center items-center'>
                    Created with <img width={25} src="icons/heart.png" alt="" /> by Hemraj-7
                </pre>
            </div>
        </div>
    )
}

export default Footer
