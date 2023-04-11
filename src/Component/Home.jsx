import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import Futures from './Futures';



const Home = () => {

    const [Category, setCategory] = useState([])
    const [Future, setFuture] = useState([])

    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        fetch('Future.json')
            .then(res => res.json())
            .then(data => setFuture(data))
    }, [])
    return (
        <div >
            <section className='bg-gray-100 p-2 rounded flex flex-col-reverse md:flex-row lg:justify-between items-center mt-8'>
                <div>
                    <h1 className='font-bold text-7xl'>One Step <br /> Closer To Your <br /> <span className='text-blue-500'>Dream Job</span> </h1>
                    <p className='mt-6'>Explore thousands of job opportunities with all the
                        <br />
                        information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className=' bg-blue-500 text-white font-bold px-4 py-2 rounded mt-8'>Get Started</button>
                </div>
                <div>
                    <img className='rounded' src="https://i.ibb.co/Qp2GtJ6/job-man.jpg" alt="" />
                </div>
            </section>
            {/* job category */}
            <section className='mt-20'>

                <div className='text-center'>
                    <h1 className='font-bold text-3xl mb-3'>Job Category List</h1>
                    <p className='mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid  grid-cols-2 lg:grid-cols-4 h-full justify-center gap-4  '>
                    {
                        Category.map(Category => <JobCategory
                            key={Category.id}
                            Category={Category}
                        ></JobCategory>)
                    }
                </div>
            </section>
            {/* job future */}
            <section>

                <div className='text-center mt-16'>
                    <h1 className='font-bold text-3xl'>Featured Jobs</h1>
                    <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div  className='grid lg:grid-cols-2 gap-4 mt-4'>
                {
                    Future.map(future=><Futures
                    key={future.id}
                    future={future}
                     ></Futures>)
                }
                </div>
            </section>
        </div>
    );
};

export default Home;