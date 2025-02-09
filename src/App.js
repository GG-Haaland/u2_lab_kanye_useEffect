import { useState } from 'react'
import './styles/App.css'
import KanyeQuote from './components/KanyeQuote'


const App = () => {
  const [displayQuote, setDisplayQuote] = useState(false)
  

  
  // useEffect(() => {
   
  // const getKanyeQuote = async () => {
  //     const quote = await axios.get(`https://api.kanye.rest`)
  //     console.log(quote.data)
  //     setQuote(quote.data) 
    
  //   }
  //   getKanyeQuote()
  // }, [])  
  

 
  
  const toggleQuotes = () => {
    displayQuote ? setDisplayQuote(false) : 
    setDisplayQuote(true)
  
  }

  return (
    <div className="App">
      <header className="kanye-header"></header>
      <main>
        <div className="quote-container">
          <h1>Kanye Quotes</h1>
          {displayQuote === false ?
            <h2>Need some inspiration? See what Kanye thinks.</h2>
            :
            <KanyeQuote displayQuote={{displayQuote}}/>
          } 
        </div>
        <button onClick={toggleQuotes}>
            {displayQuote === false ? "New Quote" : "Clear Quote"}
        </button>
      </main>
    </div>
  )
}


export default App
