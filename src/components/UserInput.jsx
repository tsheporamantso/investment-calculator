import React, { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    InitialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.InitialInvestment}
            onChange={(e) => handleChange("InitialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
