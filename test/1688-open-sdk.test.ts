import ApiExecutor from '../src/1688-open-sdk'
import { GetTokenData } from '../src/lib/utils'
/**
 * Dummy test
 */
function createInstance() {
  if (process.env.APPKEY && process.env.APPSECRET) {
    const apiExecutor = new ApiExecutor(process.env.APPKEY, process.env.APPSECRET)
    return apiExecutor
  }
}
const apiExecutor = createInstance()
let userData: GetTokenData | undefined
describe('ApiExecutor test', () => {
  it('ApiExecutor is instantiable', () => {
    expect(apiExecutor).toBeInstanceOf(ApiExecutor)
  })
  it('refreshToken2AccessToken', async () => {
    const refresh_token = '5a7eebfb-9573-4f5c-9f07-848535649e6c'
    const data = await apiExecutor!.refreshToken2AccessToken(refresh_token)
    userData = data
    expect(data.access_token.length > 0).toBeTruthy()
  })
  it('execute method test', async () => {
    const data = await apiExecutor!.execute(
      'com.alibaba.linkplus/alibaba.cross.similar.offer.search',
      {
        picUrl:
          'https://img.alicdn.com/imgextra/i1/O1CN01PwAoB21LuSuZE9Oqx_!!6000000001359-2-tps-1170-597.png',
        page: 1
      },
      userData!.access_token
    )
    expect(data.result.result.length > 0).toBeTruthy()
  })
})
