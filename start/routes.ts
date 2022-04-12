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

Route.get('/api', async () => {
  return { hello: 'world' }
})

// Route.get('/api/estados', async () => {
//   return { teste: 'oi' }
// })

// Route.get('/api/estado/:id', 'EstadosConstroller.index')
// Route.get('/api/estados', 'estados')

Route.resource('/api/estados', 'EstadosController').apiOnly()
Route.resource('/api/cidades', 'CidadesController').apiOnly()
Route.resource('/api/paises', 'PaisesController').apiOnly()

Route.post('/api/login', 'AuthController.login')
