import { useState } from 'react'
import './App.css'
const people = [
  {"id": 1, "name": "John", "age": 25, "city": "New York"},
  {"id": 2, "name": "Alice", "age": 30, "city": "San Francisco"},
  {"id": 3, "name": "Bob", "age": 28, "city": "Los Angeles"},
  {"id": 4, "name": "Emily", "age": 22, "city": "Chicago"},
  {"id": 5, "name": "Michael", "age": 35, "city": "Seattle"},
  {"id": 6, "name": "Sophia", "age": 27, "city": "Boston"},
  {"id": 7, "name": "David", "age": 31, "city": "Miami"},
  {"id": 8, "name": "Olivia", "age": 26, "city": "Austin"},
  {"id": 9, "name": "Daniel", "age": 29, "city": "Denver"},
  {"id": 10, "name": "Ella", "age": 24, "city": "Portland"}
]
function chanOrd()
{
  const [sortOrder, setSortOrder] = useState('asc');
  const sortedData = [...people].sort
  (
    (a, b) => 
    {
    const valueA = a.name;
    const valueB = b.name;

    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
  return 0; 
    }
  )
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
    <input type='text' onInput={e => {setSearchTerm(e.currentTarget.value)}}/>
    <table>
      <th>
        <td onClick={chanOrd}>Név</td>
      </th>
    <tbody>
    {people.sort((a,b)=>{
     return a.name.localeCompare(b.name);
    }).filter(x=>{
      return x.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    }).map(person => (
      <tr>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
      </tr>
    ))}
    </tbody>
    </table>
    </>
  )
}

export default App
