import s from '../style/InputContainer.module.scss'


export const InputContainer= ({title, word, handleSearch, handleChange})=>{
    return(
        <div className={s.inputContainer}>
        <h2 className={s.subtitleStyle}>{title}</h2>
        <div className={s.searchBar}>
        <input
          type="search"
          name="search"
          value={word}
          onChange={handleChange}
          placeholder=""
        />
        <button onClick={handleSearch}>Search</button>
      </div>
        </div>
    )
}