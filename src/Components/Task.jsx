import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Task = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [description, setDescription] = useState("");
  const [item, setItem] = useState([]);

  //   Right side code
  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // perform validation and submit form data
    const newRecord = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };

    setItem([...item, newRecord]);
    handleReset();
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value.toLowerCase().replace(/\s/g, ""));
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value.replace(/\D/g, ""));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };

  const handleSkillsChange = (event) => {
    const selectedSkills = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSkills(selectedSkills);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleDescriptionChange = (content, editor) => {
    setDescription(content);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setPhoneNumber("");
    setEmail("");
    setSkills([]);
    setFromDate("");
    setToDate("");
    setDescription("");
  };

  //   Right side code

  

 

  const handleEdit = () => {
    // set form data to the selected record
    const setFormData = (item) => {
      setFirstName(item.firstName || "");
      setLastName(item.lastName || "");

      setPhoneNumber(item.phoneNumber || "");
      setEmail(item.email || "");
    };
  };

  //   const handleDelete = () => {};
  const handleDelete = (record) => {
    const updatedRecords = item.filter((r) => r !== record);
    setItem(updatedRecords);
  };

  return (
    <>
      <div class="row">
        {/* form right side code starts */}
        <div class="col-md-6">
          <form onSubmit={handleFormSubmit}>
            <div className="row mb-3">
              <label htmlFor="first-name" className="col-sm-2 col-form-label">
                First Name:
              </label>
              <input
                className="col-sm-10"
                type="text"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="last-name" className="col-sm-2 col-form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="col-sm-10"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="user-name" className="col-sm-2 col-form-label">
                User Name:
              </label>
              <input
                type="text"
                id="user-name"
                className="col-sm-10"
                value={userName}
                onChange={handleUserNameChange}
                required
                pattern="[a-z0-9]+"
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="phone-number" className="col-sm-2 col-form-label">
                Phone No.
              </label>
              <input
                type="tel"
                id="phone-number"
                className="col-sm-10"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                minLength="10"
                pattern="[0-9]+"
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email Id:
              </label>
              <input
                type="email"
                id="email"
                className="col-sm-10"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="skills" className="col-sm-2 col-form-label">
                Skills:
              </label>
              <select
                id="skills"
                multiple
                value={skills}
                className="col-sm-10"
                onChange={handleSkillsChange}
                required
              >
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React">React</option>
                <option value="TypeScript">TypeScript</option>
                <option value="CSS3">CSS3</option>
                <option value="Javascript">Javascript</option>
                <option value="JQuery">JQuery</option>
              </select>
            </div>
            <div className="row mb-3">
              <label htmlFor="from-date" className="col-sm-2 col-form-label">
                Exp start date:
              </label>
              <input
                type="date"
                id="from-date"
                className="col-sm-10"
                value={fromDate}
                onChange={handleFromDateChange}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="to-date" className="col-sm-2 col-form-label">
                Exp End date:
              </label>
              <input
                type="date"
                id="to-date"
                value={toDate}
                onChange={handleToDateChange}
                className="col-sm-10"
                required
                max={new Date().toISOString().split("T")[0]}
                min={fromDate}
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description:
              </label>
              <Editor
                id="description"
                value={description}
                className="col-sm-10"
                onEditorChange={handleDescriptionChange}
                init={{ height: 100 }}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        {/* form right side code starts */}

{/* Table left side code starts */}
        <div class="col-md-6">
          {/* Data */}
          <div></div>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {item.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
          {/* Table left side code end */}
        </div>
      </div>
    </>
  );
};

export default Task;
