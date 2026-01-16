import React, { useEffect, useState } from 'react';
import Job from './Job';

const Featuresjob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    },
        [],)
    return (
        <div className='text-center '>
            <h2 className='text-3xl'>Features Jobs:{jobs.length}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet aut odio velit, reiciendis  incidunt eius!</p>
            <div className='grid grid-cols-2 gap-6 bg-amber-100 mt-10' >
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length &&'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className=' mt-5 px-5 py-2 font-extrabold border rounded border-[#0294f9] bg-[#0294f9]  text-[#ffffff]'>See all Jobs</button>
            </div>
        </div>


    );
};

export default Featuresjob;