import React from 'react';

const Futures = ({future}) => {
    console.log(future)
    const{companyLogo,companyName,educationalRequirements,email,experiences,id,jobDescription,jobResponsibility,jobTitle,location,phone,salary,workPlace,workTime}=future
    return (
        <div className='border p-6 rounded '>
           <img className='h-32 w-48' src={companyLogo} alt="" />
           <h1 className='text-4xl font-bold '>{jobTitle}</h1>
           <h2 className='text-3xl font-medium my-4'>{companyName}</h2>

           <div className='flex gap-2'>
            <p className='border border-blue-600 p-1 text-blue-800 rounded bg-blue-50'>{workPlace}</p>
            <p className='border border-blue-600 p-1 text-blue-800 rounded bg-blue-50'> {workTime}</p>
           </div>
           
           <div className='flex gap-8 my-4'>
            <div className='flex items-center'>
                <img  className='h-8' src="../../public/img/location.png" alt="" />
                <p>{location}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='h-8' src="../../public/img/dollar.png" alt="" />
                <p>{salary}</p>
            </div>
           </div>
           <button className='bg-blue-500 px-4 py-2 rounded text-white font-bold'>View Details</button>
        </div>
    );
};

export default Futures;