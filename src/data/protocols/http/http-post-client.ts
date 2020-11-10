/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { HttpResponse } from '@/data/protocols/http/http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, E> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<E>>
}
