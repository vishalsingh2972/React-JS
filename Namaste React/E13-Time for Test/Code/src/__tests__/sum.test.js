import { sum } from "../components/sum";

//__ known as 'dunder' //__tests__ folder name
//'trial.spec.js' or 'trial.test.js' ~ test file names

//trial test case in JS
//test("description of the test", write the implementation of the test/code to test)
test("sum function must calculate the sum of two numbers", () => {

  const result = sum(1, 4);

  expect(result).toBe(5); // this line is known as 'Assertion'
});