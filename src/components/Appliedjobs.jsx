import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localStorage';

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIDs = getStoredJobApplication();

    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => storedJobIDs.includes(job.id));
      setAppliedJobs(jobsApplied); 
    }
  }, [jobs]);

  return (
    <div>
      <h2>Applied all jobs ({appliedJobs.length})</h2>
      {appliedJobs.length > 0 ? (
        <ul>
          {appliedJobs.map(job => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applied jobs found.</p>
      )}
    </div>
  );
};

export default Appliedjobs;
