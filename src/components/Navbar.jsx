import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center py-3 px-5 Md:px-40'>
        <div className="logo font-bold text-xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-3'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="/about">About</a>
            <a className='hover:font-bold' href="/contact">Contact</a>
          </li>
        </ul> */}
        <button className='bg-green-600 hover:bg-green-500 text-white font-bold flex gap-2 justify-center items-center px-2 py-1 rounded-full ring-white ring-1'>
          <a href="https://github.com/Hemraj-7">
            <img width={25} src="/icons/github.svg" alt="github logo" />
          </a>
          <a href="https://github.com/Hemraj-7">
            <span>GitHub</span>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
