import ApiExecutor from '../src/1688-open-sdk'
/**
 * Dummy test
 */
describe('ApiExecutor test', () => {
  it('ApiExecutor is instantiable', () => {
    console.log('process.env', process.env)
    if (process.env.APPKEY && process.env.APPSECRET) {
      expect(new ApiExecutor(process.env.APPKEY, process.env.APPSECRET)).toBeInstanceOf(ApiExecutor)
    }
  })
})
