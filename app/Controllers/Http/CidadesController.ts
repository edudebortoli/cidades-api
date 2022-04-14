import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cidade from 'App/Models/Cidade'

export default class CidadesController {
  public async index() {
    const cidades = await Cidade.query().preload('estado').preload('pais')
    // .whereRaw("nom_cidade ilike '%flores%'")
    // const cidades = await Database.query()
    //   .select(
    //     'cidades.id_cidade',
    //     'cidades.nom_cidade',
    //     'cidades.id_ibge',
    //     'estados.id_estado',
    //     'estados.nom_estado',
    //     'paises.id_pais',
    //     'paises.nom_pais',
    //     'cidades.created_at',
    //     'cidades.updated_at'
    //   )
    //   .from('cidades')
    //   .innerJoin('estados', 'cidades.id_estado', 'estados.id_estado')
    //   .innerJoin('paises', 'cidades.id_pais', 'paises.id_pais')

    return cidades
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['nom_cidade', 'id_ibge', 'id_estado', 'id_pais'])
    const cidade = await Cidade.create(body)
    return response.ok(cidade)
  }
  public async show({ params, response }: HttpContextContract) {
    const cidade = await Cidade.findOrFail(params.id)
    return response.ok(cidade)
  }
  public async update({ params, request }: HttpContextContract) {
    const cidade = await Cidade.findOrFail(params.id)
    const body = request.only(['nom_cidade', 'id_ibge', 'id_estado', 'id_pais'])
    cidade.merge(body)
    await cidade.save()
    return cidade
  }
  public async destroy({ params }: HttpContextContract) {
    const cidade = await Cidade.findOrFail(params.id)
    cidade.delete()
    return cidade
  }
}
