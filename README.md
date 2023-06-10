

 # Profile Github

 <h2>Projeto em react.js com typescript</h2>
 <h3>o projeto consiste em buscar um perfil do github e mostrar alguns status do mesmo</h3>

#
<h3>📺Vídeo do projeto</h3>

https://github.com/Setoue/search-profile-github/assets/79421646/56f51cdf-d34a-4160-b579-6250c216d349

#


 <ul>
    <li> Foi o utilizado o build tool Vite para a criação do projeto</li>
    <li> API do Github - https://api.github.com/users/nome_do_usuario</li>
    <li> CSS modularizado</li>
    <li> Typescript</li>
 </ul>

#
<ul>
<li>
<h2>Consumo da API ⛏️</h2>
</li>
<h3>É necessário a aplicação do token para fazer a requisição da API</h3>
        
```
    const res = await fetch(`https://api.github.com/users/${userName}`, {
    headers: {
        'Authorization': 'SEU_TOKEN', //token de acesso do github
        },
    })
```

<li>
<h2>Rotas</h2>
</li>
<h3>Foram usados os createBrowserRouter e o RouterProvider para a implatação de rotas</h3>

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```
#

<h3>E para rederizar essa rotas, foi utilizado o Outlet do 'react-router-dom' </h3>

```
import { Outlet } from 'react-router-dom'
```

#

<li>
<h2>Typescript</h2>
</li>

<h3>O TS foi essencial para impor tipo no objeto que eu vou receber da API e também tipar as prorps recebidas dos componentes</h3>

```
export type SearchProps = {
    findUser: (userName: string) => Promise<void>;
}
```
#
```
const Search = ({ findUser }: SearchProps) => {}
```

#

<li>
<h2>Icons</h2>
</li>

<h3>Foi utilizado a lib 'react-icons' para implementar figuras visuais</h3>

```
import { BsSearch } from 'react-icons/bs';
```
</ul>
