import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  name: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Form({ name, onSubmit, onChange }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="book-input"
        className="input input__lg"
        name="text"
        value={name}
        onChange={onChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Search
      </button>
    </form>
  );
}

export default Form;
