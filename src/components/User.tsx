
//css
import style from '../css/User.module.css'

//types
import { UserProps } from '../types/user'

//icons
import { MdLocationPin } from 'react-icons/md'

const User = ({
    login,
    avatar_url,
    followers,
    following,
    location
}: UserProps) => {
    return (
        <div className={style.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            <p className={style.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
            <div className={style.others}>
                <div>
                    <p>Seguidores:</p>
                    <p className={style.numbers}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={style.numbers}>{following}</p>
                </div>
            </div>
        </div>
    )
}

export default User