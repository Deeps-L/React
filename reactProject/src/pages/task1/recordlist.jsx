// RecordsList.js
import React from "react";

const RecordsList = () => {
  const records = [
    { id: 1, name: "This is Record 1" },
    { id: 2, name: "My Name is Deepika Lakhera" },
    { id: 3, name: "I am working as Software Engineer" },
    {
      id: 4,
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <div>
      <h2>Records List</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.name} - {record.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordsList;
