import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../utility/localStorage';

const JobDetails = () => {
    
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job);

        const handleApplyJob =() =>{
            saveJobApplication(id);
            toast("you have applied succesfully");
        }

    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                Comming Details
                <p>{job.company_name}</p>
                <div className="border md:col-span-1">
                    <h2>Job Details of: {job.job_title}</h2>
                    <div> <button onClick={handleApplyJob} className='btn-circle text-center border- stroke-lime-400 bg-amber-600 text-1xl text-black ' >Apply Now</button></div>

                </div>
                <div className="border md:col-span-3">

                </div>
                <div className='border'>


                </div>

            </div>







 <ToastContainer />

        </div>
        


    );
};

export default JobDetails;