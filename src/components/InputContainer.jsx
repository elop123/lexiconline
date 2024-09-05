import s from '../style/InputContainer.module.scss'

export const InputContainer= (props)=>{
    return(
        <>
        <h2 className={s.subtitleStyle}>{props.title}</h2>
        </>
    )
}