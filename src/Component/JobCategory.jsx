import React from 'react';

const JobCategory = ({Category}) => {
    const{category,availableJob,logo}=Category;
    return (
        <div className='border-2 p-4 rounded text-center bg-slate-100 ' >
            <img className='h-16 mx-auto mb-4 rounded' src={logo} alt="" />
            <h1 className='font-bold mb-2'>{category}</h1>
            <p>{availableJob}</p>
        </div>
    );
};

export default JobCategory;