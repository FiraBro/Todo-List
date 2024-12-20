import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

const data = [
  {
    name: "watch movie",
    duedate: "2024-12-12",
    id: 1,
  },
  {
    name: "Go to GYM",
    duedate: "2024-12-13",
    id: 1,
  },
  {
    name: "watch youtube",
    duedate: "2024-12-14",
    id: 2,
  },
  {
    name: "make my dinner",
    duedate: "2024-12-15",
    id: 3,
  },
  {
    name: "watch and play with kids",
    duedate: "2024-12-16",
    id: 4,
  },
  {
    name: "take a shower",
    duedate: "2024-12-12",
    id: 5,
  },
  {
    name: "sleep",
    duedate: "2024-12-12",
    id: 6,
  },
];

export default function Main() {
  const [items, setItems] = useState(data);
  const [name, setName] = useState("");
  const [duedate, setDuedate] = useState("");
  function handleItem(item) {
    setItems((items) => [...items, item]);
  }
  console.log(items);
  function DeleteList(id) {
    setItems((items) => items.filter((item) => item.id !== id));

  }
  return (
    <div className="mains">
      <Form onAdditems={handleItem}  name={name} setName={setName} duedate={duedate} setDuedate={setDuedate}/>
      <List items={items} onDeleteItems={DeleteList}/>
    </div>
  );
}
