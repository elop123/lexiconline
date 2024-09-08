import s from '../style/Main.module.scss'

export const Main =()=>{
    return(
        <main className={s.mainStyle}>
        <p>Welcome to Lexiconline—your go-to online dictionary where the love for words meets the joy of learning! 
        Born out of a deep passion for language, Lexiconline is more than just a dictionary; it's a gateway to a 
        world of endless discovery, where every word has a story to tell.</p>
        <h2 className={s.mainTitleStyle}>Our Philosopy</h2>
        <p>At Lexiconline, we believe that language is a powerful tool that connects us, inspires creativity, and 
        broadens our horizons. Whether you’re a student, a writer, or simply a lover of words, our mission is to 
        provide you with a resource that not only defines words but also sparks curiosity and encourages a deeper 
        understanding of the language we use every day.</p>
        <h2 className={s.mainTitleStyle}>Why Lexiconline</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facilis, voluptates laudantium omnis consequatur reiciendis ducimus maxime voluptate! Quibusdam cumque sequi quod eligendi, sit laboriosam. Inventore in ea est eos.</p>
        <h2 className={s.mainTitleStyle}>A special thanks</h2>
        <p>Without all amazing work done at the people who made http none of this would have been possible. Their Api is completely free for anyone to develop with and we encourange you to visit their site.So much so, that we have included a direct link to their site in the navigation  on this site.</p>
        </main>
    )
}