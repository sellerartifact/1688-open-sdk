import { computedAppSignature } from '../src/lib/utils'
/**
 * Dummy test
 */
describe('appSignature test', () => {
  it('ApiExecutor is instantiable', () => {
    const encryStr = computedAppSignature("param2/1/system/currentTime/1000000", {b: 2, a: 1}, "1000000")
    expect(encryStr).toBe("33E54F4F7B989E3E0E912D3FBD2F1A03CA7CCE88")
  })
})
