import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='m-2 p-2 text-2xl font-semibold border border-dashed rounded flex items-center justify-between'>
        <h1>UserList</h1>
        <a href="https://github.com/radzhiv25/user-list">

        <FaGithub className='hover:text-gray-500'/>
        </a>
    </div>
  )
}

export default Navbar