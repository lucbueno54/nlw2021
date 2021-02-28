import style from '../styles/components/Profile.module.css'


export function Profile(){

    return(
        <div  className={style.profileConteiner}>
            <img src="http://github.com/diego3g.png" alt="avatar"/>
            <div>
                <strong>Lucas Bueno</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1</p>
            </div>
        </div>
    )
}