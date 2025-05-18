import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List.jsx'

function App() {
  const [count, setCount] = useState(0)
  const profile = [
    {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Leslie Alexander",
      email : "leslie.alexander@example.com",
      designation : "Co-Founder / CEO",
      lastSeen : "3h ago",
    },
    {
      img : "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Michael Foster",
      email : "michael.foster@example.com",
      designation : "Co-Founder / CTO",
      lastSeen : "3h ago",
    },
    {
      img : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Dries Vincent",
      email : "dries.vincent@example.com",
      designation : "Business Relations",
      lastSeen : "Online",
    },
    {
      img : "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Lindsay Walton",
      email : "lindsay.walton@example.com",
      designation : "Front-end Developer",
      lastSeen : "3h ago",
    },
    {
      img : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Courtney Henry",
      email : "courtney.henry@example.com",
      designation : "Designer",
      lastSeen : "3h ago",
    },
    {
      img : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name : "Tom Cook",
      email : "tom.cook@example.com",
      designation : "Director of Product",
      lastSeen : "Online",
    }
  ]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind Test</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {profile.map(function (value, index, array) {
          return <List img={value.img} name={value.name} email={value.email} designation={value.designation} lastSeen={value.lastSeen}></List>
          })
        }        
      </ul>
    </>
  )
}

export default App
