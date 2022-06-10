import ApiExecutor from '../src/1688-open-sdk'
/**
 * Dummy test
 */
describe('ApiExecutor test', () => {
  it('ApiExecutor is instantiable', () => {
    console.log('process.env.APPSECRET', process.env)
    if (process.env.APPKEY && process.env.APPSECRET) {
      const apiExecutor = new ApiExecutor(process.env.APPKEY, process.env.APPSECRET)
      expect(apiExecutor).toBeInstanceOf(ApiExecutor)
    }
  })
})
