import React, { useState } from "react";

const Dynamic = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    const newComponent = (
      <ChildComponent
        key={components.length}
        index={components.length}
        removeComponent={removeComponent}
      />
    );
    setComponents([...components, newComponent]);
  };

  const removeComponent = (indexToRemove) => {
    const filteredComponents = components.filter(
      (_, index) => index !== indexToRemove
    );
    setComponents(filteredComponents);
  };

  return (
    <div>
      <h1>Dynamic Components Example</h1>
      <button onClick={addComponent}>Add Component</button>
      <div>
        {components.map((component, index) => (
          <div key={index} onClick={() => removeComponent(index)}>
            {/* <span>{index + 1}</span> */}
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

const ChildComponent = ({ index, removeComponent }) => {
  return (
    <div>
      <p>This is Child Component {index + 1}</p>
      <button onClick={() => removeComponent(index)}>X</button>
    </div>
  );
};

export default Dynamic;
