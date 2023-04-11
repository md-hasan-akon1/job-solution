import React, { useEffect, useState } from 'react';
import JobDetail from './JobDetail';
import { getShoppingCart } from './AddToDb';
import { useLoaderData } from 'react-router-dom';
import AppliedCart from './AppliedCart';

const AppliedJobs = () => {
    const allData = useLoaderData()

    let data = []
    const saveCart = getShoppingCart()

    if (saveCart) {
        for (const id in saveCart) {
            const carts = allData.find(Data => Data.id == id)
            data.push(carts)
        }

    }

    return (
        <div>
  <h1 className='text-3xl font-bold text-center my-8 items-center '>Applied Jobs</h1>

 
            {
                data.map(data =><AppliedCart
                key={data.id}
                data={data}
                ></AppliedCart>)
            }
        </div>
    );
};

export default AppliedJobs;