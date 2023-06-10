// componentes
import Search from '../components/Search'
import User from '../components/User'

//hooks
import { useState } from 'react'

//types
import { UserProps } from '../types/user';

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null); //o useState pode ser de um desses dois tipos: UserProps ou null
    const [error, setError] = useState<string | null>(null);

    const loadUser = async (userName: string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`, {
            headers: {
                'Authorization': 'SEU_TOKEN', //token de acesso do github
            },
        })
        const data = await res.json()

        if (res.status === 404) {
            setError('Usuário não encontrado')
            return;
        }

        const { avatar_url, login, location, followers, following } = data; //desestruturação do objeto data que contém os dados do usuário

        const userData: UserProps = { //criação de um objeto userData do tipo UserProps
            avatar_url,
            login,
            location,
            followers,
            following
        }

        setUser(userData)
        setError(null)
        console.log(userData)
    }

    return (
        <div>
            <Search findUser={loadUser} />

            {!error ? (user && <User {...user} />) : (<p>{error}</p>)} {/*spread operator para passar as propriedades do objeto user para o componente User*/}
        </div>
    )
}

export default Home