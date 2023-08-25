
const resume = {
  name: "arumugam",
  title: "FSD",
  contact: {
    email: "your.email@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, State, Country"
  },
  education: [
    {
      degree: "Bachelor of Engineering",
      major: "ECE",
      university: "Anna University",
      graduationYear: 2016
    }
  ],
  experience: [
    {
      title: "FSD",
      company: "Company Name",
      location: "City, State",
      startDate: "January 2020",
      endDate: "Present",
      description: "Description of your responsibilities and achievements in this role."
    }
  ],
  skills: ["HTML", "CSS", "JAVA"]
};

const resumeJSON = JSON.stringify(resume, null, 2);

console.log(resumeJSON);
