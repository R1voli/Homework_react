import style from './Message.module.css'

export const Message = (props) => {
    return <form>
        <p className={style.app_p}>Message: {props.message}</p>
    </form>
}   