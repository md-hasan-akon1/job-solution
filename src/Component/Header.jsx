import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const[open,setOpen]=useState(false)
    return (
        <div className='flex mt-4 bg-slate-400 p-2 rounded lg:gap-2 justify-between relative '>
            <div className='flex items-center gap-4'>
                <img className='h-16  rounded-full' src="../../public/img/logo.jpg" alt="" />
                <h1 className='text-2xl font-semibold lg:font-bold'>Job Solutions</h1>
            </div>
            <nav>
                <div  className='md:hidden' onClick={()=>setOpen(!open)}>
                    <span>
                        {
                            open===true?< XMarkIcon className="h-6 w-6 absolute top-6 text-blue-500 left-[80%]" />: < Bars3Icon className="h-6 w-6 absolute text-blue-500 left-[80%] top-6 " />
                        }
                    </span>
               
                
                </div>
                <div className={`flex flex-col absolute left-[80%] lg:flex-row lg:left-[35%] lg:gap-8 transition duration-200 ${open?'top-10 lg:top-6':'-top-40 lg:top-6' }`}>
                    <Link className='font-bold' to='/'>Home</Link>
                    <Link className='font-bold' to='/'>Statistics</Link>
                    <Link className='font-bold' to='/'>Applied Jobs</Link>
                    <Link className='font-bold' to='/'>Blog</Link>
                </div>
            </nav>

            <div>
                <button className='absolute mt-4 left-[51%] lg:left-[91%] bg-blue-600 px-4 py-2 rounded text-white font-semibold' >Applied job</button>
            </div>
        </div>
    );
};

export default Header;