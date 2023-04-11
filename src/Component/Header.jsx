import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const[open,setOpen]=useState(false)
    return (
        <div className='flex mt-4 bg-slate-400 p-2 rounded md:gap-2 justify-between relative '>
            <div className='flex items-center gap-4'>
                <img className='h-16  rounded-full' src={`https://i.ibb.co/tLRkXJK/logo.jpg`} alt="" />
                <h1 className='text-2xl font-semibold md:font-bold'>Job Solutions</h1>
            </div>
            <nav>
                <div  className='md:hidden' onClick={()=>setOpen(!open)}>
                    <span>
                        {
                            open===true?< XMarkIcon className="h-6 w-6 absolute top-6 text-blue-500 left-[90%]" />: < Bars3Icon className="h-6 w-6 absolute text-blue-500 left-[90%] top-6 " />
                        }
                    </span>
                </div>
                <div className={` bg-slate-400 px-2 rounded flex flex-col absolute left-[79%] md:flex-row py-2 md:left-[35%] md:gap-8  duration-200 ${open?'top-16 md:top-4':'-top-48 md:top-6' }`}>
                    <Link className='font-bold' to='/'>Home</Link>
                    <Link className='font-bold' to='Statistics'>Statistics</Link>
                    <Link className='font-bold' to='/appliedJob'>Applied Jobs</Link>
                    <Link className='font-bold' to='/'>Blog</Link>
                </div>
            </nav>

            <div>
                <button className='absolute mt-3 left-[58%] md:left-[90%] bg-blue-600 px-4 py-2 rounded text-white font-semibold' >Applied job</button>
            </div>
        </div>
    );
};

export default Header;