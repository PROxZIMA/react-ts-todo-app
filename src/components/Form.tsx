import React, { useState } from "react";
import { FormProps } from "../types/types";

const Form = (props: FormProps) => {
  const [task, setTask] = useState('');

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    props.addTask(task);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-task-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input className="input input__lg" id="new-task-input" type="text" value={task} onChange={handleChangeTask} autoComplete="off" />
      <button type="submit" value="Add" className="btn btn__primary btn__lg">Add</button>
    </form>
  )
}

export default Form;