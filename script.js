// Sample job data
const jobData = [
    { title: 'Web Developer', company: 'Tech Inc.', location: 'Addis Ababa' },
    { title: 'Mobile App Developer', company: 'App Solutions', location: 'Addis Ababa' },
    // Add more job data here
];

// Function to display job listings
function displayJobListings() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';

    jobData.forEach((job, index) => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <button onclick="displayJobDetails(${index})">View Details</button>
        `;
        jobList.appendChild(jobItem);
    });
}

// Function to display job details
function displayJobDetails(index) {
    const jobDetails = document.getElementById('job-details');
    jobDetails.innerHTML = '';

    const job = jobData[index];
    const jobDetail = document.createElement('div');
    jobDetail.classList.add('job-detail');
    jobDetail.innerHTML = `
        <h2>${job.title}</h2>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
    `;
    jobDetails.appendChild(jobDetail);
}

// Initial page load
displayJobListings();
