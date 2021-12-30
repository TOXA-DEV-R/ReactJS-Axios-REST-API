import React, { useState } from "react";

const AddContact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const users = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }

    props.addContactHandler(state);
    setState({ name: "", email: "" });
    props.history.push("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={users}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={users}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
