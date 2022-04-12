import React, { useEffect, useRef, useState } from "react";
import { TaskItemProps } from "../types/types";

const TaskItem = (props: TaskItemProps) => {
  const { task, onCheckChange, onDelete, onEdit } = props;
  const { id, name, isCompleted } = task;

  const [isEdit, setEdit] = useState(false);
  const [newName, setNewName] = useState('');

  const oldIsEdit = useRef(isEdit);
  const editFieldRef = useRef<HTMLInputElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const handleEditClick = () => {
    setEdit(!isEdit);
  };

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newName.trim() === '') {
      return;
    }
    onEdit(id, newName);
    setNewName('');
    setEdit(false);
  }

  const defaultTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input id={id} type="checkbox" checked={isCompleted} onChange={() => onCheckChange(task.id)} />
        <label className="todo-label" htmlFor={id}>{name}</label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEditClick} ref={editButtonRef} >Edit</button>
        <button type="button" className="btn task-delete" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );

  const editTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>New name for {name}</label>
        <input id={id} className="task-text" type="text" onChange={handleChangeTask} ref={editFieldRef} />
      </div>
      <div className="btn-group">
        <button type="button" className="btn task-cancel" onClick={handleEditClick}>Cancel</button>
        <button type="submit" className="btn task-save">Save</button>
      </div>
    </form>
  );

  useEffect(() => {
    if (oldIsEdit.current && !isEdit) {
      editButtonRef.current?.focus();
    }
    if (!oldIsEdit.current && isEdit) {
      editFieldRef.current?.focus();
    }
    oldIsEdit.current = isEdit;
  }, [isEdit, oldIsEdit]);

  return (
    <li className="tasks">
      {isEdit ? editTemplate : defaultTemplate}
    </li>
  );
};

export default TaskItem;