/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<T, E> implements HttpPostClient<T, E> {
  url?: string
  body?: T
  response: HttpResponse<E> = {
    statusCode: HttpStatusCode.OK
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<E>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
