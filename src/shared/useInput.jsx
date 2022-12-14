import React from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
