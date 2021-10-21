import React, { useState } from "react";
import Layout from "../components/Layout";

function UploadResults() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!name && !!id && !!details) {
      console.log("RESULT:", {
        id,
        name,
        details,
      });
      alert("Result Uploaded Successfully");
      setId("");
      setDetails("");
      setName("");
    } else {
      setError("Please fill all fields to continue...");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <Layout>
      <form className="upload" onSubmit={handleSubmit}>
        <h2>Upload Results</h2>
        <p>Enter your results below:</p>
        <p className="error">{error}</p>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="id"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            id="id"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label htmlFor="details">Details</label>
          <textarea
            name="details"
            value={details}
            id="detail"
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
          ></textarea>
        </div>
        <div className="btn">
          <button>Send</button>
        </div>
      </form>
    </Layout>
  );
}

export default UploadResults;
