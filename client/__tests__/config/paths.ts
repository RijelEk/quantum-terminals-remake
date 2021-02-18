import {
  pathHome
} from "@/app/config/paths";

describe("test paths", () => {
  it("Path home", () => {
    expect(pathHome()).toBe("/")
  })

})