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
    const handelRemote = (Remote) => {
        if(data){
          
        const RemoteData=data.filter(data=>data.workPlace==Remote)
        RemoteData.map(remoteData=>console.log(remoteData))
     
    }

}




    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8 items-center '>Applied Jobs</h1>
            <div className='w-full text-right'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">filter</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handelRemote('Remote')} >Remote</a></li>
                        <li><a onClick={() => console.log('Onsite')} >Onside</a></li>
                    </ul>
                </div>
            </div>

            <div> {
                data.map(data => <AppliedCart
                    key={data.id}
                    data={data}
                ></AppliedCart>)
            }</div>
        </div>
    );
};

export default AppliedJobs;