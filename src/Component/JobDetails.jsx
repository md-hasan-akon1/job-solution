import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetail from './JobDetail';

const JobDetails = () => {
    const params = useParams();
    const loadData = useLoaderData()
    const [dataDetails, setDataDetails] = useState({});
    useEffect(() => {
        if (loadData) {
            const singleData = loadData.find(dt => dt.id == params.id)
            setDataDetails(singleData)
        }
    }, [])
    // console.log(params, loadData)

    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>job Details</h1>
            <div>
                {
                    <JobDetail
                    key={dataDetails.id}
                    dataDetails={dataDetails}
                    
                    ></JobDetail>
                }


            </div>
        </div>
    );
};

export default JobDetails;