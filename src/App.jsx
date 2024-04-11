import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'

function App() {

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
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
    </>
  )
}

export default App
