import * as C from './style/ListScreenStyle'
import { useLocation } from 'react-router-dom'
import TaskList, { TaskProps } from '../taskList/TaskList'
import { useState } from 'react';

export default function ListScreen(){
    const location = useLocation()
    const [tasks, setTasks] = useState(location.state ? location.state.tasks : JSON.parse(localStorage.getItem('tasks') || '[]'))
    const title = location.state ? location.state.title : localStorage.getItem('title')  || ''

    const toggleTaskdone = (id: number) => {
            const updatedTasks = tasks.map((task: TaskProps) => task.id === id ? { ...task, done: !task.done } : task)
            setTasks(updatedTasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
    
    return (
        <C.Frame>
            <C.Case>
                <C.Title>{title}</C.Title>
                <TaskList tasks={tasks} onToggleDone={toggleTaskdone}/>
                <C.Paragraph>Your new to-do list</C.Paragraph>
            </C.Case>
        </C.Frame>
    )
}