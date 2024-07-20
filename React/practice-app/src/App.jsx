import React from "react";
import "./index.css";
import Card from "./components/Card";
import contacts from "./contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
