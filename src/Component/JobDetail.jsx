import React from 'react';

const JobDetail = ({ dataDetails }) => {
    const { companyLogo, companyName, educationalRequirements, email, experiences, id, jobDescription, jobResponsibility, jobTitle, location, phone, salary, workPlace, workTime } = dataDetails;
    console.log(dataDetails)
    return (
        <div className='grid md:grid-cols-3  lg:gap-12 mt-20'>
            <div className='col-span-2 border bg-blue-50 p-8 rounded'>
                <p className='my-4'><span className='font-bold'>job Description: </span> {jobDescription}</p>
                <p><span className='font-bold'>job Responsibility: </span> {jobResponsibility}</p>
                <p className='my-4'><span className='font-bold'>educational Requirements: </span> {educationalRequirements}</p>
                <p><span className='font-bold'>experiences: </span>{experiences}</p>
            </div>
            <div className=''>
                <div className='p-4 mt-10 lg:mt-1 border mx-auto border-blue-300 bg-blue-50 rounded'>
                    <h1 className='text-2xl font-bold'>Job Details</h1>
                    <hr className='bg-gray-500 h-[2px]' />
                    <div className='flex gap-2 items-center my-4'>
                        <img className='' src="../../public/img/dolar-icon.png" alt="" />
                        <p><span className='font-semibold'>salary:</span>{salary}(per month)</p>
                    </div>
                    <div className='flex gap-2 items-center mb-4'>
                        <img src="../../public/img/calender.png" alt="" />
                        <p> <span className='font-semibold'>job title : </span>{jobTitle}</p>
                    </div>
                    <h1 className='text-2xl font-bold'>Contact Information</h1>
                    <hr className='bg-gray-500 h-[2px]' />

                    <div className='flex items-center gap-2 my-4'>
                        <img src="../../public/img/phone.png" alt="" />
                        <p> <span className='font-semibold'>phone : </span>{phone}</p>
                    </div>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src="../../public/img/mail.png" alt="" />
                        <p> <span className='font-semibold'>Email : </span>{email}</p>
                    </div>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src="../../public/img/sm-location.png" alt="" /> <p> <span className='font-semibold'>Address : </span>{location}</p>
                    </div>
                </div>

                <button className=' bg-blue-500 text-white w-full font-bold px-4 py-2 rounded mt-8'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetail;