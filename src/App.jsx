import { useState } from 'react'
import './App.css'

//components
import Header from './MyComponents/Header/Header'
import Enjoy from './MyComponents/Enjoy/Enjoy'
import Download from './MyComponents/Download/Download'
import Watch from './MyComponents/Watch/Watch'
import Kids from './MyComponents/Kids/kids'
import Questions from './MyComponents/Questions/Questions'

import data from './data'
import Footer from './MyComponents/Footer/Footer'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      <div style={{ padding: "3rem", background: "#000", color: "#fff", textAlign: "center", borderBottom: "8px solid #222" }}>
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Frequently Asked Questions</h3>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{ margin: "2rem 0", fontSize: "1.2rem" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <input style={{ width: "500px", padding: "1.5rem 1rem" }} type="email" placeholder="Email Address" />
        <button style={{ width: "200px", padding: "1.2rem 1rem", color: '#fff', backgroundColor: "#e50914", fontSize: "1.5rem", border: "none", position: "relative", top: "4px" }} type="submit">Get Started</button>
      </div>
      <Footer/>
    </>
  )
}

export default App
