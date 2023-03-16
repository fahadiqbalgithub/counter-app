import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const counterIncrementHandler = () => {
    setCounter(counter + 1);
  };

  const counterDecrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="border-black border-2 rounded-xl text-center w-96 my-96 mx-auto">
      <h1 className="my-4 text-4xl underline underline-offset-8">Counter App</h1>
      <div className="my-6">
        <p className="border-2 border-black rounded-md mx-14 font-bold text-2xl">
          {counter}
        </p>
      </div>
      <div className="mb-4">
        <button
          className="border-black border-2 rounded-lg mr-2 px-5 bg-sky-500 w-32 h-8 font-sans font-bold"
          onClick={counterIncrementHandler}
        >
          Increment
        </button>
        <button
          className="border-black border-2 rounded-lg ml-2 px-5 bg-red-500 w-32 h-8 font-sans font-bold"
          onClick={counterDecrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
