import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const users = [
    {
      name: "Amber Matthews",
      friends: 6
    },
    {
      name: "Russell Robertson",
      friends: 2
    },
    {
      name: "Kathleen Ellis",
      friends: 2
    }
  ]

  return (
    <section className='p-10'>
      <section className='card-section'>
        <Card users={users} />
      </section>
      {/* <div>
        <img
          className='w-full rounded-lg '
          src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div>
        <h1 className='text-4xl font-medium mb-2'>Headline</h1>
        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi corporis aliquam voluptates voluptas dolore alias eius sed molestias itaque officiis, nam quaerat deleniti numquam, dolorum ullam accusantium incidunt ea ipsam.</p>
      </div> */}
    </section>
  )
}

export default App
