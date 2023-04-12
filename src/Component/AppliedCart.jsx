import React from 'react';
import { Link } from 'react-router-dom';

const AppliedCart = ({ data }) => {

    const { companyLogo, companyName, jobTitle, location, salary, workPlace, workTime, id } = data;
    return (
        <div >
          <div className='grid  my-4 grid-cols-3 border items-center  bg-slate-200'>
          <div className=' flex  col-span-2'>
                <img className='h-32 lg:w-48 p-4  my-auto  mr-4' src={companyLogo} alt="company logo" />
                <div>
                    <h1 className='text-4xl font-bold mt-4'>{jobTitle}</h1>
                    <h2 className='font-bold my-4'>{companyName}</h2>
                    <div className='flex gap-2'>
                        <p className='border border-blue-600 p-1 text-blue-800 rounded bg-blue-50'>{workPlace}</p>
                        <p className='border border-blue-600 p-1 text-blue-800 rounded bg-blue-50'> {workTime}</p>
                    </div>
                    <div className='flex gap-8 my-4'>
                        <div className='flex items-center'>
                            <img className='h-8' src="https://i.ibb.co/SvvfqgX/location.png" alt="" />
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <img className='h-8' src="https://i.ibb.co/rdSC6MH/dollar.png" alt="" />
                         <p>{salary}</p>
                        </div>
                    </div>
                </div>
            </div>
                <Link to={`/${id}`}> <button className='bg-blue-500  px-4 py-2 rounded text-white font-bold'>View Details</button></Link>
          </div>

        </div>
    );
};

export default AppliedCart;