import React, { useState } from "react";

const Calculator = () => {
  const [symbol, setSymbol] = useState(null);
  const [inputNum, setInputNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const addNums = () => {
    if (prevNum.toString().includes(".") || inputNum.toString().includes(".")) {
      setInputNum(prevNum + inputNum);
    } else {
      setInputNum(parseInt(prevNum) + parseInt(inputNum));
    }
  };

  const subtractNums = () => {
    if (prevNum.toString().includes(".") || inputNum.toString().includes(".")) {
      setInputNum(prevNum - inputNum);
    } else {
      setInputNum(parseInt(prevNum) - parseInt(inputNum));
    }
  };

  const multiplyNums = () => {
    if (prevNum.toString().includes(".") || inputNum.toString().includes(".")) {
      setInputNum(prevNum * inputNum);
    } else {
      setInputNum(parseInt(prevNum) * parseInt(inputNum));
    }
  };

  const divideNums = () => {
    if (prevNum.toString().includes(".") || inputNum.toString().includes(".")) {
      setInputNum(prevNum / inputNum);
    } else {
      setInputNum(parseInt(prevNum) / parseInt(inputNum));
    }
  };

  const calculate = () => {
    setPrevNum(inputNum);
    if (symbol == "+") {
      addNums();
    } else if (symbol == "-") {
      subtractNums();
    } else if (symbol == "*") {
      multiplyNums();
    } else if (symbol == "/") {
      divideNums();
    }
  };

  const clear = () => {
    setPrevNum(0);
    setInputNum(0);
    setSymbol(null);
  };

  const setIterator = (e) => {
    setSymbol(e.target.value);
    setPrevNum(inputNum);
    setCalculating(true);
    calculate();
  };

  const handleNumClick = (e) => {
    if (inputNum == 0 && !inputNum.toString().includes(".")) {
      setInputNum(e.target.value);
    } else {
      if (calculating == true) {
        setInputNum(e.target.value);
        setCalculating(false);
        setPrevNum(inputNum);
      } else {
        setInputNum(inputNum + e.target.value);
      }
    }
  };

  const handleDecimalClick = (e) => {
    // setSymbol('')
    if (inputNum % 1 !== 0) {
      console.log('null')
    } else {
      if (calculating == true) {
        setInputNum(e.target.value);
        setCalculating(false);
        setPrevNum(inputNum);
      } else {
        setInputNum(inputNum + e.target.value);
      }
    }
  };

  const handleNegative = () => {
    if (inputNum > 0) {
      setInputNum("-" + inputNum);
    } else {
      setInputNum(Math.abs(inputNum));
    }
  };

  const handlePercent = () => {
    setInputNum(inputNum * 0.01);
  };

  return (
    <div>
      <div className="numbercontainer">
        <div className="number">
          {inputNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      <br />

      <br />
      <div className="numbers">
        <button className="topbutton" onClick={clear}>
          {inputNum == 0 && symbol == null ? "AC" : "C"}
        </button>
        <button className="topbutton" onClick={handleNegative}>
          +/-
        </button>
        <button className="topbutton" onClick={handlePercent}>
          %
        </button>
        <button
          className={symbol === "/" ? "selectedbutton" : "itbutton"}
          onClick={setIterator}
          value={"/"}
        >
          ÷
        </button>

        <button className="numbutton" onClick={handleNumClick} value={7}>
          7
        </button>
        <button className="numbutton" onClick={handleNumClick} value={8}>
          8
        </button>
        <button className="numbutton" onClick={handleNumClick} value={9}>
          9
        </button>
        <button
          className={symbol === "*" ? "selectedbutton" : "itbutton"}
          onClick={setIterator}
          value={"*"}
        >
          ×
        </button>

        <button className="numbutton" onClick={handleNumClick} value={4}>
          4
        </button>
        <button className="numbutton" onClick={handleNumClick} value={5}>
          5
        </button>
        <button className="numbutton" onClick={handleNumClick} value={6}>
          6
        </button>
        <button
          className={symbol === "-" ? "selectedbutton" : "itbutton"}
          onClick={setIterator}
          value={"-"}
        >
          -
        </button>

        <button className="numbutton" onClick={handleNumClick} value={1}>
          1
        </button>
        <button className="numbutton" onClick={handleNumClick} value={2}>
          2
        </button>
        <button className="numbutton" onClick={handleNumClick} value={3}>
          3
        </button>
        <button
          className={symbol === "+" ? "selectedbutton" : "itbutton"}
          onClick={setIterator}
          value={"+"}
        >
          +
        </button>
      </div>
      <div className="iterators">
        <button className="zerobutton" onClick={handleNumClick} value={0}>
          0
        </button>
        <button className="numbutton" onClick={handleDecimalClick} value={"."}>
          .
        </button>
        <button className="itbutton" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
