import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useParams , useLoaderData } from 'react-router';
import CreatableSelect from "react-select/creatable";
import axios from "axios";

const UpdateJob = () => {


  



    const id = useParams();
    // console.log(id);

const {_id, jobTitle , companyName , minPrice , maxPrice , salaryType , jobLocation,
        postingDate, experienceLevel , companyLogo , employmentType , description ,postedBy
    , skills }
 = useLoaderData()

 console.log("Skills Data:", skills);

 const [selectedOptions, setSelectedOptions] = useState(null);

 const {
  register,
  handleSubmit,reset,
  formState: { errors },
} = useForm();

const onSubmit = (data) => {
  fetch(`http://localhost:4000/update-job/${id}`, {
    method: "PATCH",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      if(result.acknowledged === true){
        alert("Job Updated Sucessfully!!");
      } 
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    reset();

};



const options = [
  { value: "Javascript", label: "Javascript" },
  { value: "C++", label: "C++" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "React", label: "React" },
  { value: "Node JS", label: "Node JS" },
  { value: "Mongo DB", label: "Mongo DB" },
  { value: "Redux", label: "Redux" },
];

const handleSelectChange = (newValue) => {
  setSelectedOptions(newValue);
};



  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
    <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 1st row */}
        <div className="create-job-flex ">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg" htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              defaultValue={jobTitle}
              {...register("jobTitle")}
              className="create-job-input"
              id="jobTitle"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg" htmlFor="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Ex: Microsoft"
              defaultValue={companyName}      
              {...register("companyName")}
              className="create-job-input"
              id="companyName"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="create-job-flex ">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Minimum Salary</label>
            <input
              type="text"
              placeholder="$20k"
              defaultValue={minPrice}
              {...register("minPrice")}
              className="create-job-input"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Maximum Salary</label>
            <input
              type="text"
              placeholder="$120k"
              defaultValue={minPrice}
              {...register("maxPrice")}
              className="create-job-input"
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="create-job-flex ">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Salary Type</label>
            <select
              {...register("salaryType")}
              className="create-job-input"
            >
              
              <option value={salaryType}>{salaryType}</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Job Location</label>
            <input
              type="text"
              placeholder="Ex: New York"
              defaultValue={jobLocation}      
              {...register("jobLocation")}
              className="create-job-input"
            />
          </div>
        </div>

        {/* row-4 */}
        <div className="create-job-flex ">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Job Posting Date</label>
            <input
              type="date"
              placeholder="Ex: 2023-10-28"
              defaultValue={postingDate}
              {...register("postingDate")}
              className="create-job-input"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Experience Level</label>
            <select
              {...register("experienceLevel")}
              className="create-job-input"
            >
              <option value={experienceLevel}>{experienceLevel}</option>
              <option value="NoExperience">No Experience</option>
              <option value="Internship">Internship</option>
              <option value="Work remotely">Work remotely</option>
            </select>
          </div>
        </div>

        {/* 5th row */}
        <div>
          <label className="block mb-2 text-lg"> Required Skill Sets</label>
          {console.log('Skills Data:', skills)}
          <CreatableSelect
            // value={selectedOptions}
            // defaultValue={skills}
      
            defaultValue={skills ? skills.map(skill => ({ value: skill, label: skill })) : []}

            //  onChange={handleSelectChange}
            onChange={setSelectedOptions}
            options={options}
            isMulti
            className="create-job-input py-4"
          />
        </div>

        {/* 6th row */}
        <div className="create-job-flex ">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Company Logo</label>
            <input
              type="url"
              placeholder="Pate Your company logo URL: https://wetransfer.com/img1"
              defaultValue={companyLogo}
              {...register("companyLogo")}
              className="create-job-input"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Employment Type</label>
            <select
              {...register("employmentType")}
              className="create-job-input"
            >
              <option value={employmentType}>{employmentType}</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>

        {/* 7th row */}
        <div className="w-full">
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea
            className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray:700"
            rows={6}
            placeholder="Job Description"
            defaultValue={description}
            {...register("description")}
          />
        </div>

        {/* last row */}
        <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted By</label>
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={postedBy}
            {...register("postedBy")}
            className="create-job-input"
          />
        </div>

        <input
          type="submit"
          className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
        />
      </form>
    </div>
  </div>
  )
}

export default UpdateJob