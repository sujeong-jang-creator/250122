import React from 'react';

interface TodoItemProps {
    title: string;
    completed: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, onToggle, onRemove }) => {
    return (
        <div className={`todo-item ${completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            <span>{title}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

export default TodoItem;