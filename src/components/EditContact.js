import React, { useState } from "react";

const EditContact = (props) => {
  const { id, name, email } = props.location.state.contact;
  const [state, setState] = useState({
    id,
    name,
    email,
  });

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.updateContactHandler(state);
    setState({ name: "", email: "" });
    props.history.push("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
