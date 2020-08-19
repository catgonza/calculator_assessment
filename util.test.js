import { performCalculation } from "./util.js";

//test to check whether Utils methods are executed properly with the values provided

describe("check the operation of 2 numbers", () => {
  it("sum of 2 and 4 must result in 6", () => {
    let sum = performCalculation["+"](2, 4);
    expect(sum).toBeDefined();
    expect(sum).toEqual(6);
  });
  it("difference of 5 and 3 must result in 2", () => {
    let diff = performCalculation["-"](5, 3);
    expect(diff).toBeDefined();
    expect(diff).toEqual(2);
  });
  it("product of 6 and 8 must result in 48", () => {
    let prod = performCalculation["*"](6, 8);
    expect(prod).toBeDefined();
    expect(prod).toEqual(48);
  });
  it("result of division of 64 by 4 must result in 16", () => {
    let div = performCalculation["/"](64, 4);
    expect(div).toBeDefined();
    expect(div).toEqual("16.000");
  });
});

// const { performCalculation } = require("./script.js");

// describe("valid additions", () => {
//   test("1+1=2", () => {
//     expect(add(1, 1)).toEqual(2);
//   });
//   test("10+20=30", () => {
//     expect(add(10, 20)).toEqual(30);
//   });
// });
// describe("Calculate", function () {
//     let calculator;
//     let operator;

//     beforeEach(function () {
//         calculator = new calculator();
//     });

//     it
// })
