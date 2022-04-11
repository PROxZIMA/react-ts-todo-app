import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Task } from './types/types';

const root = createRoot(document.getElementById('root')!);

const defaultTasks: Task[] = [
  { id: 'todo-1', name: 'Eat', isCompleted: false },
  { id: 'todo-2', name: 'Sleep', isCompleted: true },
  { id: 'todo-3', name: 'Code', isCompleted: false },
  { id: 'todo-4', name: 'Repeat', isCompleted: false },
]

root.render(
  <React.StrictMode>
    <App defaultTasks={defaultTasks} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
