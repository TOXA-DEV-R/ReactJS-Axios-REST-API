import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const styleEdit = { color: "blue", marginTop: "7px" };
  const styleTrash = { color: "red", marginTop: "7px", marginLeft: "10px" };

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={styleTrash}
        onClick={() => props.deleteConactHandler(id)}
      ></i>

      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i className="edit alternate outline icon" style={styleEdit}></i>
      </Link>
    </div>
  );
};

export default ContactCard;
