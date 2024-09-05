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
            setIsSearch(data[0])
            console.log(data);
            
            }
        searchWord();
        
    },[setIsSearch,word]);

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
           setIsSearch(true);
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
           
        {displayWord && (
        <section>
            {displayWord.map((item, index) => (
            <div key={index}>
              <h2>{item.word[0]}</h2>
              <p>Phonetic: {item.phonetic}</p>
              
            </div>
            ))}
        </section>)
        }
        </div>
         
        )
        }
       
    