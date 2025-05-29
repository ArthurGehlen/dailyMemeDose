import { useState, useEffect } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import './App.css'

function App() {
  const [category, setCategory] = useState('')
  const [data, setData] = useState([])

  function fetch_data(category){
    if (category) {
      fetch(`https://meme-api.com/gimme/${category}`)
      .then(received_data => received_data.json())
      .then(received_data => (
        setData(received_data)
      )) 
    }
    else {
      fetch(`https://meme-api.com/gimme`)
      .then(received_data => received_data.json())
      .then(received_data => (
        setData(received_data)
      ))
    }
  }

  function handle_change(e) {
    const new_category = e.target.value
    setCategory(new_category)
    fetch_data(new_category)
  }

  useEffect(() => {
    fetch_data(category)
  }, [])

  return (
    <>
      <h1>Daily Meme Dose</h1>

      <main>
        <p className='subreddit'>
          Subreddit: <strong>{data.subreddit}</strong>
        </p>

        <p className='autor'>
          Author: <strong>{data.author}</strong>
        </p>

        <a href={data.postLink} target='_blank'>
          Post Link
        </a>

        <h2 className='title'>
          <q><i>{data.title}</i></q>
        </h2>

        <img src={data.url} alt="Meme Img" />

        <div className="ups_container">
          <AiOutlineLike />
          <p>{data.ups}</p>
        </div>

        <button onClick={() => fetch_data(category)}>Generate Meme</button>
        <select value={category} onChange={handle_change}>
          <option value="">Selecione um reddit específico</option>
          <option value="wholesomememes">r/wholesomememes</option>
          <option value="dankmemes">r/dankmemes</option>
          <option value="memes">r/memes</option>
          <option value="shitpostBR">r/shitpostBR</option>
          <option value="memesBR">r/memesBR</option>
          <option value="futebol">r/futebol</option>
        </select>
      </main>
    </>
  )
}

export default App
