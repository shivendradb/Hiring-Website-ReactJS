import React from "react";
import "./NewJob.css";
import NewJobCard from "./NewJobCard";

function NewJob() {
  return (
    <div className="newJob">
      <h1 className="newJob__title">New Job Opportunities</h1>
      <div className="newJob__card">
        <NewJobCard id="1" title="Customer Support" img="./img-2.png" />
        <NewJobCard id="2" title="Digital Marketing" img="./img-3.png" />
        <NewJobCard id="3" title="Web Design" img="./img-4.png" />
      </div>
    </div>
  );
}

export default NewJob;
