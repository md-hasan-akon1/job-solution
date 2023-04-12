import React, { useEffect, useState } from 'react';
import JobDetail from './JobDetail';
import { getShoppingCart } from './AddToDb';
import { useLoaderData } from 'react-router-dom';
import AppliedCart from './AppliedCart';

const AppliedJobs = () => {
    const allData = useLoaderData()


    const [CartData, setCartData] = useState([])
    useEffect(() => {
        const saveCart = getShoppingCart()

        if (saveCart) {
            let array = []
            for (const id in saveCart) {
                const carts = allData.find(Data => Data.id == id)
                array.push(carts)
            }
            setCartData(array)
        }
    }, [])

    const handelRemote = (Remote) => {
        if (CartData) {


            const RemoteData = CartData.filter(data => data.workPlace == Remote)
            setCartData(RemoteData)
            

        }

    }


    const handelOnsite = (onsite) => {
        if (CartData) {


            const onsiteData = CartData.filter(data => data.workPlace == onsite)
            setCartData(onsiteData)
            

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
                        <li><a onClick={() => handelOnsite('Onsite')} >Onside</a></li>
                    </ul>
                </div>
            </div>

            <div> {
                CartData.map(data => <AppliedCart
                    key={data.id}
                    data={data}
                ></AppliedCart>)
            }</div>
        </div>
    );
};

export default AppliedJobs;