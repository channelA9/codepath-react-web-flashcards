import { useState } from "react";

const Form = (props: { guess: string, onGuess: any, check: any }) => {
  return (
      <form onSubmit={props.check} className="m-4">
        <label>Guess:</label>
        <input
        className="p-2 m-4 bg-slate-100"
          type="text"
          placeholder="Enter your guess"
          required
          value={props.guess}
          onChange={props.onGuess}
        />
        <input type="submit"/>
      </form>
  );
};

export default Form;
