import { AxiosResponse } from 'axios'
import { ApiBaseResponse } from '../types'
import defaultApi from './config'

async function getTypes(): Promise<AxiosResponse<ApiBaseResponse<string[]>>> {
  return defaultApi.get('/types')
}

export default getTypes
