import { Outlet } from 'react-router-dom'

//css
import style from './css/App.module.css'

function App() {
  return (
    <div className={style.app}>
      <h1>Gitbub Profile</h1>
      <Outlet /> {/* o outlet é um componente que renderiza o componente filho que corresponde ao caminho atual da URL*/}
    </div>
  )
}

export default App
