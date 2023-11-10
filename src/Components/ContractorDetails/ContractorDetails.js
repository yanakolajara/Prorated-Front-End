import React from "react";
import "./ContractorDetails.css";

function ContractorDetails() {
  const contractor = {
    name: "John Doe",
    jobTitle: "Electrician",
    location: "New York, NY",
    experience: "5 years",
    contact: "john.doe@email.com",
    phoneNumber: "555-123-4567",
    description:
      "John Doe is an experienced electrician with a passion for providing high-quality electrical services...",

    profileImageSrc:
      "data:image/png;base64,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",

    pastJobs: [
      {
        title: "Job 1",
        reviews: ["Great job! Very professional.", "Excellent workmanship."],
        img: "https://conductiveelectric.com/wp-content/uploads/2015/09/electricianworkingelectricalpanel.jpg",
      },
      {
        title: "Job 2",
        reviews: ["Highly recommended.", "Outstanding service."],
        img: "https://electricianridgewood.com/wp-content/uploads/2018/04/Wiring-New-Construction.jpg",
      },
    ],
    servicesOffered: [
      "Electrical Wiring",
      "Fixture Installation",
      "Troubleshooting",
    ],
  };

  return (
    <div className="contractor-profile-container">
      <div className="container-details">
        <h3>{contractor.name}</h3>
        <img src={contractor.profileImageSrc} alt={contractor.name} />
        <p>Job Title: {contractor.jobTitle}</p>
        <p>Location: {contractor.location}</p>
        <p>Experience: {contractor.experience}</p>
        <p>Contact: {contractor.contact}</p>
        <p>Phone Number: {contractor.phoneNumber}</p>
      </div>
      <div>
        <h3>About {contractor.name}</h3>
        <p>{contractor.description}</p>
      </div>
      <div className="past-jobs">
        <h3>Past Jobs</h3>
        {contractor.pastJobs.map((job, index) => (
          <div key={index} className="past-job-card">
            <img src={job.img} alt={`Job ${index + 1}`} />
            <h3>{job.title}</h3>
            <div className="reviews">
              {job.reviews.map((review, i) => (
                <p key={i} className="review">
                  {review}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="service-offered">
        <h3>Services Offered</h3>
        <ul>
          {contractor.servicesOffered.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContractorDetails;
