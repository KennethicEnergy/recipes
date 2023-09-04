import { Home, Create, Recipe, Search  } from '../pages/index';

export const routes = [
  { id: 1, path: '/', isExact: true, component: <Home/>},
  { id: 2, path: '/create', component: <Create/> },
  { id: 3, path: '/search', component: <Search/> },
  { id: 4, path: '/recipe/:id', component: <Recipe/> },
  { id: 5, path: '*', component: <p>Path Not Found</p> }
]