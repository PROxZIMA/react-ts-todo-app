export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
}

export type FilterMap = {
  [key: string]: (task: Task) => boolean;
}

export type AppProps = {
  defaultTasks: Task[];
}

export type TaskItemProps = {
  task: Task;
  onCheckChange: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

export type FormProps = {
  addTask: (name: string) => void;
}

export type FilterButtonProps = {
  filterName: string;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>

}

export type CheckboxProps = {
  task: Task;
  onCheckChange: (task: Task) => void;
  onDelete: (task: Task) => void;
}