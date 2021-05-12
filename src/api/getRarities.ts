import defaultApi from './config'
import { AxiosResponse } from 'axios'
import { ApiBaseResponse } from '../types'

async function getRarities(): Promise<
  AxiosResponse<ApiBaseResponse<string[]>>
> {
  return defaultApi.get('/rarities')
}

export default getRarities
