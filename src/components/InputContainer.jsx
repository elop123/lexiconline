import s from '../style/InputContainer.module.scss'

export const InputContainer= (props)=>{
    return(
        <div className={s.inputContainer}>
        <h2 className={s.subtitleStyle}>{props.title}</h2>
        </div>
    )
}