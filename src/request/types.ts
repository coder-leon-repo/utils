export type Response<T> = {
  errcode: number
  errmsg: string | null
  data: T
}
