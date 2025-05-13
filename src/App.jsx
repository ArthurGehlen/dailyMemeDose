import { useState, useEffect } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import './App.css'

function App() {
  const [data, setData] = useState([])

  function fetch_data() {
    fetch('https://meme-api.com/gimme')
      .then(received_data => received_data.json())
      .then(received_data => (
        setData(received_data)
      ))
  }

  useEffect(() => {
    fetch_data()
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

        <button onClick={() => fetch_data()}>Generate Meme</button>
      </main>
    </>
  )
}

export default App
