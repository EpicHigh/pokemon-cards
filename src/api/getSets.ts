import defaultApi from './config'
import { AxiosResponse } from 'axios'
import { ApiBaseResponse, Params } from '../types'

async function getRarities(
  params: Params
): Promise<AxiosResponse<ApiBaseResponse<string[]>>> {
  return defaultApi.get('/sets', { params })
}

export default getRarities
