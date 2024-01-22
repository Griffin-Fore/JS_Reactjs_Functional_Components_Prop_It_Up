import './App.css'
import PersonCard from './Components/PersonCard'
function App() {
  // create a list
  const people = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown"
    },
  ]
  return (
    <>
      {/* match each list index to a variable and set that variable to the props of each PersonCard*/}
      <PersonCard personCard={people[0]}/>
      <PersonCard personCard={people[1]}/>
      <PersonCard personCard={people[2]}/>
      <PersonCard personCard={people[3]}/>
    </>
  )
}

export default App