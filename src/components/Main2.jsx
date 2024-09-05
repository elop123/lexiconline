import { useState, useEffect } from 'react';
import s from '../style/Main2.module.scss'

export const Main2 =()=>{

    const [word, setWord] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [displayWord, SetDisplayWord] = useState([]);
    

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    useEffect (() => {
        async function searchWord(){
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            setIsSearch(true)<
            SetDisplayWord(data);
            console.log(data);
            
            }
        searchWord();
        
    },[word]);

    //function for input change
    const handleChange = (e) => {
        setWord(e.target.value);
        //console.log(e.target.value)
      };


    //function for the search button
    const handleSearch = (e) =>{
        if(word===''){
           alert('Please enter a word')
        }else{
           searchWord();
        }
       
        console.log('Search clicked for:', word)
    }

    return(
        <div>
        <section className={s.searchContainer}>
            <h2 className={s.subtitleStyle}>Enter a word to search for:</h2>
            <div className={s.inputContainer}>
            <input onChange={handleChange} type="search" name="search" value={word}/>
            <button onClick={handleSearch}>Search</button>
            </div>
        </section>
           
        {isSearch &&  displayWord.length > 0 && (
       <section>
       {displayWord.map((item, index) => (
         <div key={index}>
          <h2>{word}</h2>
           <h2>Noun:{item.word}</h2>
           <p>Phonetic: {item.phonetic }</p>
           <p>Definition: {item.meanings[0].definitions[0].definition}</p>
          <p>{item.meanings[0].partofSpeech}</p>
          <p>{item.meanings[0].synonyms}</p>
         </div>
       ))}
     </section>)
        }
        </div>
         
        )
        }
       
    