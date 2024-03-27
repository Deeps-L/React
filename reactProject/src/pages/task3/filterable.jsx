import React, { useState } from "react";

const TaskThree = () => {
  const [query, setQuery] = useState("");

  // Array of records
  const records = [
    { id: 1, name: "This is Record 1" },
    { id: 2, name: "My Name is Deepika Lakhera" },
    { id: 3, name: "I am working as Software Engineer" },
    {
      id: 4,
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter records based on the search query
  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Filterable Records</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredRecords.map((record) => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskThree;
