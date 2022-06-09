import axios, { AxiosResponse } from "axios"
import { UrlParam, computedAppSignature, GetTokenData } from "./lib/utils"


export default class ApiExecutor {

  constructor(private appKey: string, private appSecret: string){}

  async execute(api: string, params: UrlParam, access_token: string){
    api = this.mergeApi(api)
    params.access_token = access_token
    params._aop_timestamp = Date.now()
    params._aop_signature = computedAppSignature(api, params, this.appSecret)

    try{
      const res = await axios({
          url: this.mergeUrl(api),
          method: "post",
          params
      })
      return res.data
    }catch(e){
        const res =  (e as AxiosResponse)
        if(res.data){
            return res.data
        }
        throw new Error((e as Error).message)
    }
  }

  async refreshToken2AccessToken(refreshToken: string){
    const url = `https://gw.open.1688.com/openapi/param2/1/system.oauth2/getToken/${this.appKey}`
    const params = {
        grant_type: "refresh_token",
        client_id: this.appKey,
        client_secret: this.appSecret,
        refresh_token: refreshToken
    }
    const res = await axios({
      url,
      method: "post",
      params
    })
    return res.data as GetTokenData
  }

  private mergeApi(api: string){
    return `param2/1/${api}/${this.appKey}`
  }

  private mergeUrl(api: string){
    const request_url = 'http://gw.open.1688.com/openapi/'
    return request_url + api
  }

}
