function sum(a:number,b:number):number{
    return a + b
}
describe("hello", () => {
    it('sum', () => {
      expect(sum(1,2)).toEqual(3)
    })
})