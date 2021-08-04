import React from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/contact/contactActions";

const Filter = ({ value, setNewFilterContacts }) => {
  const onHandleChange = (e) => {
    setNewFilterContacts(e.target.value);
  };

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onHandleChange} />
      </label>
    </>
  );
};

const mstp = (state) => {
  return {
    value: state.Filter,
  };
};

export default connect(mstp, { setNewFilterContacts: filterContacts })(Filter);
