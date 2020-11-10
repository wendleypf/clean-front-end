/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 404
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
