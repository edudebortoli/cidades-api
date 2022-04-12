// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Paises from 'App/Models/Pais'

export default class PaisController {
  public async index() {
    const paises = await Database.table('paises')
    return {
      message: 'paises listados',
      paises: paises,
    }
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const pais = await Paises.create(body)
    response.status(201)
    return {
      message: 'Pais Criado',
      pais: pais,
    }
  }
  public async show({ params }: HttpContextContract) {
    const pais = await Paises.findOrFail(params.id)
    return {
      pais: pais,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const pais = await Paises.findOrFail(params.id)
    pais.delete()
    return {
      message: 'pais deletado',
      pais: pais,
    }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const pais = await Paises.findOrFail(params.id)
    pais.nom_pais = body.nom_pais
    pais.save()
    return {
      message: 'pais alterado',
      pais: pais,
    }
  }
}
