// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Paises from 'App/Models/Pais'

export default class PaisController {
  public async index() {
    const paises = await Database.table('paises')
    return paises
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['nom_pais'])
    const pais = await Paises.create(body)
    response.status(201)
    return pais
  }
  public async show({ params }: HttpContextContract) {
    const pais = await Paises.findOrFail(params.id)
    return pais
  }
  public async update({ params, request }: HttpContextContract) {
    const pais = await Paises.findOrFail(params.id)
    const body = request.only(['nom_pais'])
    pais.merge(body)
    await pais.save()
    return pais
  }
  public async destroy({ params }: HttpContextContract) {
    const pais = await Paises.findOrFail(params.id)
    pais.delete()
    return pais
  }
}
