import Calculator from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Calculator Availability Check", () => {

    //availability
    it("Check for result component availability", () => {
        render(<Calculator />);
        expect(screen.getByTestId("result")).toBeInTheDocument();
    });
    it("Check for num1 component availability", () => {
        render(<Calculator />);
        expect(screen.getByTestId("num1")).toBeInTheDocument();
    });
});

describe("Calculator Functionality Check", () => {
    it("Check for button clickable", () => {
        render(<Calculator />);
    
        const number1 = screen.getByTestId("num1");
        const number2 = screen.getByTestId("num2");
        const expectedResult = '5';

        act (() => {
            fireEvent.change(number1, {target: {value: '10' }})
            fireEvent.change(number2, {target: {value: '5' }})
            screen.getByTestId("subtract").click();
        })
        const actualResult1 = screen.getByTestId("result").textContent;
        expect(actualResult1).toBe(expectedResult);

        // const actualResult2 = screen.getByTestId("result").textContent;
        // expect(actualResult2).toBe(expectedResult);

    });
  });



  /*

  Jest packages : npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  JSdom : npm install -D jest-environment-jsdom
  jest.config.js : 
    const nextJest = require("next/jest");
    const createJestConfig = nextJest({
    dir: "./",
    });
    const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    };
    module.exports = createJestConfig(customJestConfig);
  package.json : "test": "jest --watch"


  */
