import React from 'react'
import {Link} from 'react-router-dom'
import {IoMdAdd} from 'react-icons/io'

const Heading = () => {
  return (
    <div>
        <div className="flex item-center mb-10">
            <Link to='/tasklist'>
            <h5 className='text-gray-900 font-bold text-2xl'>Task List</h5>
            </Link>
        <div className="flex-grow text-right px-4 py-2 m2">
          <Link to='/taskform'>
          <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
            <IoMdAdd />
                Agregar Tarea
            </button>
          </Link>
        </div>
        </div>
    
    </div>
  )
}

export default Heading