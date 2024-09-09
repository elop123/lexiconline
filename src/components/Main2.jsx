import { useState, useEffect } from 'react';
import s from '../style/Main2.module.scss'
import audio from '../assets/images/Audio.png'
import { InputContainer } from './InputContainer';


export const Main2 =()=>{

    const [word, setWord] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [displayWord, setDisplayWord] = useState([]);
    const [searchTrigger, setSearchTrigger] = useState(false);
    

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    async function searchWord() {
      if (word) {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setIsSearch(true);
          setDisplayWord(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching the word:', error);
        }
      }
    }

 // useEffect to handle search only when searchTrigger changes
 useEffect(() => {
  if (searchTrigger) {
    searchWord();
    setSearchTrigger(false); // Reset search trigger after searching
  }
}, [searchTrigger]);

  //function for input change
    const handleChange = (e) => {
        setWord(e.target.value);
        console.log(e.target.value)
  };


  //function for the search button
    const handleSearch = (e) =>{
        if(word===''){
           alert('Please enter a word')
        }else{
           searchWord();
           setSearchTrigger(true); // Trigger search
        }
      console.log('Search clicked for:', word)
    }

    return(
        <div>
        <section className={s.searchContainer}>
        <InputContainer title="Enter a word to search for"
        word={word}
        handleChange={handleChange}
        handleSearch={handleSearch}/>
        </section>  
        {isSearch && displayWord.length > 0 && (
        <section className={s.resultStyle}>
    <div key={0}>
      <h2 className={s.wordStyle}><img className={s.audioStyle} src={audio} alt='audio-icon'></img> 
      {displayWord[0].word}</h2>
      <p className={s.phoneticStyle}>Phonetic: {displayWord[0].phonetic}</p>
      <div className={s.groupOne}>
         <div>
            <h2 className={s.nounStyle}>Noun:</h2> 
            <p className={s.definitionStyle}>1. {displayWord[0].meanings[0].definitions[0].definition}</p>
         </div>
      <div>
      <h3 className={s.underline}>Synonyms:</h3>
      <p className={s.synonymStyle}> 
        {displayWord[0].meanings?.[0]?.synonyms?.[0] || ''}
      </p>
      <p className={s.synonymStyle}> 
        {displayWord[0].meanings?.[0]?.synonyms?.[1] || ''}
      </p>
      <p className={s.synonymStyle}> 
        {displayWord[0].meanings?.[0]?.synonyms?.[2] || ''}
      </p>
      </div>
      </div>
      <hr />
      {displayWord[0].meanings[1]?.partOfSpeech === 'verb' && (
                <div>
                  <h2 className={s.verbStyle}>Verb:</h2>
                  <p className={s.definitionStyle}>
                    1. {displayWord[0].meanings[1].definitions[0].definition}</p>
                  <p className={s.definitionStyle}>
                    2. {displayWord[0].meanings[1].definitions[1].definition}</p>
                  <p className={s.definitionStyle}>
                    3. {displayWord[0].meanings[1].definitions[2].definition}</p>
                </div>
              )} <hr />
    </div>
  </section>
)}
</div>
)
}
       
    