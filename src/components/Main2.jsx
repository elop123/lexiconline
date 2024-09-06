import { useState, useEffect } from 'react';
import s from '../style/Main2.module.scss'
import audio from '../assets/images/Audio.png'


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
            setIsSearch(true);
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
       
            <div className={s.inputContainer}>
            <input onChange={handleChange} type="search" name="search" value={word}/>
            <button onClick={handleSearch}>Search</button>
            </div>
      
        </section>
           
        {isSearch && displayWord.length > 0 && (
    <section className={s.resultStyle}>
    <div key={0}>
      <h2 className={s.wordStyle}><img className={s.audioStyle} src={audio} alt='audio-icon'></img> {displayWord[0].word}</h2>
      <p className={s.phoneticStyle}>Phonetic: {displayWord[0].phonetic}</p>
      <div className={s.groupOne}>
       <div>
      <h2 className={s.nounStyle}>Noun:</h2> 
      <p className={s.definitionStyle}>1. {displayWord[0].meanings[0].definitions[0].definition}</p>
      </div>
      <p className={s.synonymStyle}> <span className={s.underline}>Synonyms:</span> <br /><br />{displayWord[0].meanings?.[0]?.synonyms?.[0] || ''}</p>
      </div>
     
      <hr />
      {displayWord[0].meanings[1]?.partOfSpeech === 'verb' && (
                <div>
                  <h2 className={s.verbStyle}>Verb:</h2>
                  <p className={s.definitionStyle}>1. {displayWord[0].meanings[1].definitions[0].definition}</p>
                </div>
              )} <hr />
   
   {displayWord[0].meanings.find((meaning) => meaning.partOfSpeech === 'interjection') && (
              <div>
                <h2 className={s.interjectionStyle}>Interjection:</h2>
                <p className={s.definitionStyle}>1. {displayWord[0].meanings.find((meaning) => meaning.partOfSpeech === 'interjection').definitions[0].definition}</p>
                <p className={s.definitionStyle}>2. {displayWord[0].meanings.find((meaning) => meaning.partOfSpeech === 'interjection').definitions[1].definition}</p>
                <p className={s.definitionStyle}>2. {displayWord[0].meanings.find((meaning) => meaning.partOfSpeech === 'interjection').definitions[3].definition}</p>
              </div>
            )}
             {displayWord[0].meanings[0].definitions[0].example && (
                    <p className={s.exampleStyle}>
                      <strong>Example:</strong>{' '}
                      {displayWord[0].meanings[0].definitions[0].example}
                    </p>
                  )}

      

      

    </div>
  </section>
)}
        </div>
         
        )
        }
       
    