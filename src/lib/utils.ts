import crypto from "crypto"

export interface UrlParam {
    [propName: string] : string | number
}

export function computedAppSignature(api: string, urlParam: UrlParam, appSecret: string){
    const encArr:Array<string> = []
    for(let k in urlParam){
        encArr.push(`${k}${urlParam[k]}`)
    }
    const encryStr = api + encArr.sort().join("")
    const hmacString = crypto.createHmac('sha1', appSecret).update(encryStr).digest('hex')
    return hmacString.toUpperCase()
}


export interface GetTokenData {
    access_token: string,
    aliId: string,
    resource_owner: string,
    expires_in: string,
    memberId: string
}