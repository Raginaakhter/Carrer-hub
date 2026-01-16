
const getStoredJobApplication =id =>{
    const StoredJobApplication =localStorage.getItem('job-applications');
    if(StoredJobApplication){
        return JSON.parse(StoredJobApplication);

    }
    return[];

}




const saveJobApplication = id =>{
    const StoredJobApplication = getStoredJobApplication();
    const exists=StoredJobApplication.find(jobId => jobId===id  );
    if(!exists){
        StoredJobApplication.push(id);
        localStorage.setItem('job-applications' , JSON.stringify(StoredJobApplication))
    }


}

export {getStoredJobApplication,saveJobApplication};