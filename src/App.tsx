import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
// import ButtonCounter from './components/ButtonCounter';
import Clock from './components/Clock';
import './App.css';
import { Task, AppProps, FilterMap } from './types/types';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import TaskItem from './components/Task';


const FILTER_MAP: FilterMap = {
  "All": () => true,
  "Active": (task: Task) => !task.isCompleted,
  "Completed": (task: Task) => task.isCompleted
};


const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props: AppProps) {
  const [tasks, setTasks] = useState(props.defaultTasks);
  const [filter, setFilter] = useState("All");
  const oldTaskLength = useRef(tasks.length);
  const listHeader = useRef<HTMLHeadingElement>(null);

  const handleToggleTask = (id: string) => {
    const updatedTasks = tasks.map(t => {
      if (t.id === id) {
        return {
          ...t,
          isCompleted: !t.isCompleted,
        };
      }
      return t;
    });
    setTasks(updatedTasks);
  }

  const handleDeleteTask = (id: string) => {
    const nonDeletedTasks = tasks.filter(t => t.id !== id);
    setTasks(nonDeletedTasks);
  }

  const handleEditedTask = (id: string, newName: string) => {
    const updatedTasks = tasks.map(t => {
      if (t.id === id) {
        return {
          ...t,
          name: newName,
        };
      }
      return t;
    });
    setTasks(updatedTasks);
  }

  const handleAddTask = (newTask: string) => {
    const newTasks = [...tasks, { id: `todo-${nanoid()}`, name: newTask, isCompleted: false }];
    setTasks(newTasks);
  }

  const filterList = FILTER_NAMES.map(filterName => (
    <FilterButton
      key={filterName}
      filterName={filterName}
      isPressed={filterName === filter}
      setFilter={setFilter} />
  ));

  const renderTasksList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onCheckChange={handleToggleTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditedTask} />
    ));

  useEffect(() => {
    if (Math.abs(oldTaskLength.current - tasks.length) == 1) {
      listHeader.current?.focus();
    }
    oldTaskLength.current = tasks.length;
  }, [tasks.length]);

  return (
    <>
      <Clock />
      <div className="todoapp stack-large">
        <Form addTask={handleAddTask} />

        <div className="filters btn-group stack-exception">
          {filterList}
        </div>

        <h2 id="list-heading" tabIndex={-1} ref={listHeader}>{renderTasksList.length} {renderTasksList.length > 1 ? "tasks" : "task"} remaining.</h2>

        <ul role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">
          {renderTasksList}
        </ul>
      </div>
    </>

  );
}

export default App;
