const app = require("../app");

describe("Test the root path", () => {
    it("should return 200",async ()=>{
        const response = await request.get("/")
        expect(response.statusCode).toBe(200)
    })
});