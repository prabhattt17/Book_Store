import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/home.css'

const Home = () => {
  const navigate = useNavigate();
  const handleChange1 = () => {
    navigate('/books')
  }
  const handleChange2 = () => {
    navigate('/add')
  }
  return (
    <div className='bt'>
      <button onClick={handleChange1} className='button-8'>View All Books</button>
      <button onClick={handleChange2} className='button-8'>Add New Books</button>
    </div>
  )
}

export default Home