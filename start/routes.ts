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
// Route.resource('/api/estados', 'EstadosController').apiOnly()
// Route.resource('/api/paises', 'PaisesController').apiOnly()
// Route.resource('/api/cidades', 'CidadesController').apiOnly()
Route.get('/api', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('api/estados', 'EstadosController.store')
  Route.post('api/paises', 'PaisesController.store')
  Route.post('api/cidades', 'CidadesController.store')
  Route.patch('api/estados/:id', 'EstadosController.update')
  Route.patch('api/paises/:id', 'PaisesController.update')
  Route.patch('api/cidades/:id', 'CidadesController.update')
  Route.delete('api/estados/:id', 'EstadosController.destroy')
  Route.delete('api/paises/:id', 'PaisesController.destroy')
  Route.delete('api/cidades/:id', 'CidadesController.destroy')
}).middleware('auth')

Route.group(() => {
  Route.get('estados', 'EstadosController.index')
  Route.get('estados/:id', 'EstadosController.show')
  Route.get('paises', 'PaisesController.index')
  Route.get('paises/:id', 'PaisesController.show')
  Route.get('cidades', 'CidadesController.index')
  Route.get('cidades/:id', 'CidadesController.show')
  Route.post('login', 'AuthController.login')
}).prefix('/api/')
