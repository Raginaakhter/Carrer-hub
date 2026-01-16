import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaCommentDollar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className=' mr-2  px-5 py-2 font-extrabold border rounded border-[#0294f9]   text-[#0294f9]'>{remote_or_onsite}</button>
                    <button className=' mr-2 px-5 py-2 font-extrabold border rounded border-[#0294f9]  text-[#0294f9]'>{job_type}</button>
                </div>


                <div>
                    <h2 className='flex' > < IoLocationSharp className='text-2xl'></IoLocationSharp>{location} </h2>
                </div>
                <div className='flex gap-2'><h2 className='text-2xl'><FaCommentDollar></FaCommentDollar></h2>{salary}</div>
                <div className="card-actions ">
                    <Link to = {`/job/${id}`}>
                    <button className="btn btn-primary">View Detials</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;