import {Header} from '../components/Header'
import { InputContainer } from '../components/InputContainer'
import {Main} from '../components/Main'

export const About=()=>{
    return(
        <>
        <Header />
        <InputContainer title="About Lexiconline" showSearchBar={false}/>
        <Main />
        </>
    )
}