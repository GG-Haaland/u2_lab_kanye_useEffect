
import { useState, useEffect } from 'react'
import axios from 'axios'

const KanyeQuote = ({displayQuote}) => {
    const [quote, setQuote] = useState('')


   
   
    const getKanyeQuote = async () => {
            try {
                const quote = await axios.get(`https://api.kanye.rest`)
            console.log(quote.data)
            setQuote(quote.data.quote) 
            } catch(err){
                console.log(err)
            }
    }

    useEffect(() => {
          getKanyeQuote()
        }, [displayQuote])  


    return (
        <h2 style={{fontStyle: 'italic'}}>{quote !== '' && quote}</h2>
    )
  }
  
  export default KanyeQuote