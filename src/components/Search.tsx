//icons
import { BsSearch } from 'react-icons/bs';

//types
import { SearchProps } from '../types/search';

//hooks / interfaces
import { useState, KeyboardEvent } from 'react';

//css
import style from '../css/Search.module.css'


const Search = ({ findUser }: SearchProps) => {

    const [userName, setUserName] = useState<string>('')

    //função que é executada quando a tecla Enter é pressionada
    const handleKeyDown = (e: KeyboardEvent) => { //KeyboardEvent é um tipo de evento que ocorre quando uma tecla é pressionada
        if (e.key === "Enter") { //se a tecla pressionada for enter
            findUser(userName)
        }
    }

    return (
        <div className={style.search}>
            <h2>Busque por um perfil:</h2>
            <div className={style.search_container}>
                <input
                    type="text"
                    onChange={(e) => { setUserName(e.target.value) }}
                    onKeyDown={handleKeyDown}
                    placeholder="O nome do usuário" />
                <button onClick={() => {
                    findUser(userName)
                }}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search