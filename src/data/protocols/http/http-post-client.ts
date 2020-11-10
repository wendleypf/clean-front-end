/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, E> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<E>>
}
