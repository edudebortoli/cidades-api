/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//Route.where('id', /^[0-9]+$/)
//É possivel definir um REGEX para autenticar os campos, ou fazer separadamente em cada rota
//o Regex acima se descomentado irá validar TODOS os :id da aplicação e passar a aceitar apenas numeros [routing]

// Legado

Route.group(() => {
  Route.resource('estados', 'EstadosController').apiOnly()
  Route.resource('paises', 'PaisesController').apiOnly()
  Route.resource('cidades', 'CidadesController').apiOnly()
})
  .prefix('/api/')
  .middleware('auth')

Route.get('/api', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'AuthController.register')
})
