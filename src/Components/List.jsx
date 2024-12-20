import React, { useState } from "react";

export default function List({ items, onDeleteItems }) {
  return (
    <div className="main">
      {items.map((elem) => (
        <Item elem={elem} onDeleteItems={onDeleteItems} />
      ))}
    </div>
  );
}
function Delete({ onDeleteItems, elem }) {
  return (
    <button
      className="list-btn"
      onClick={() => {
        onDeleteItems(elem.id);
      }}
    >
      Delete
    </button>
  );
}
function Item({ elem, onDeleteItems }) {
  const [edited, setEdited] = useState(true);
  const [localName, setLocalName] = useState(elem.name);
  const [localDuedate, setLocalDuedate] = useState(elem.duedate);
  const [saveChange, setSavechange] = useState(true);

  console.log(localName);
  let content;
  if (edited) {
    content = (
      <ul>
        <li key={elem.id} className="list">
          {!saveChange ? (
            <>
              <span className="span">{localName}</span>
              <span className="span">{localDuedate}</span>
              <span className="edit-delete">
                <button onClick={() => setEdited(false)} className="list-btn">
                  Edit
                </button>

                <Delete
                  onDeleteItems={onDeleteItems}
                  elem={elem}
                  className="list-btn"
                />
              </span>
            </>
          ) : (
            <>
              <span className="span">{elem.name}</span>
              <span className="span">{elem.duedate}</span>
              <span className="edit-delete">
                <button onClick={() => setEdited(false)} className="list-btn">
                  Edit
                </button>

                <Delete onDeleteItems={onDeleteItems} elem={elem} />
              </span>
            </>
          )}
        </li>
      </ul>
    );
  } else
    content = (
      <div className="list">
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
        <input
          type="date"
          value={localDuedate}
          onChange={(e) => setLocalDuedate(e.target.value)}
        />
        <span className="edit-delete">
          <button
            onClick={() => {
              setEdited(true);
              setSavechange(false);
            }}
            className="list-btn"
          >
            Save
          </button>
          <Delete />
        </span>
      </div>
    );

  return <div>{content}</div>;
}
