import React from "react";

export default function Form({ onAdditems,name,setName,duedate,setDuedate }) {


  function handlevent(e) {
    e.preventDefault();
    const newobj = { name, duedate, id: Date.now() };
    onAdditems(newobj);
  }

  return (
    <>
      <form onSubmit={handlevent} className="form">
        <input
          type="text"
          placeholder="Enter the Etems..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="input"
        />
        <input
          type="date"
          value={duedate}
          onChange={(e) => {
            setDuedate(e.target.value);
          }}
          className="input"
        />
        <button
          onClick={() => {
            handlevent();
            setName("");
            setDuedate("");
          }}
          className="btn"
        >
          Add
        </button>
      </form>
    </>
  );
}
