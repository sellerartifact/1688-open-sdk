import ApiExecutor from "../src/1688-open-sdk"
import { appKey, appSecret } from "./config"
/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("ApiExecutor is instantiable", () => {
    expect(new ApiExecutor(appKey, appSecret)).toBeInstanceOf(ApiExecutor)
  })
})
