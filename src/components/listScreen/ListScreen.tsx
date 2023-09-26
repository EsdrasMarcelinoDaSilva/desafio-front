import * as C from './style/ListScreenStyle'
import { useLocation } from 'react-router-dom'
import TaskList, { TaskProps } from '../taskList/TaskList'
import copy from 'copy-to-clipboard'
import { useState } from 'react'

export default function ListScreen(){
    const location = useLocation()
    const [isLinkCopied, setIsLinkCopied] = useState(false)
    const [tasks, setTasks] = useState(location.state ? location.state.tasks : JSON.parse(localStorage.getItem('tasks') || '[]'))
    const title = location.state ? location.state.title : localStorage.getItem('title')  || ''
    const link = window.location.href

    const toggleTaskdone = (id: string) => {
            const updatedTasks = tasks.map((task: TaskProps) => task.id === id ? { ...task, done: !task.done } : task)
            setTasks(updatedTasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
    
    function copyToClipboard() {
        copy(link);
        setIsLinkCopied(true)
    }

    return (
        <C.Frame>
            <C.Case>
                <C.Title>{title}</C.Title>
                <TaskList tasks={tasks} onToggleDone={toggleTaskdone}/>
                <C.Paragraph>Your new to-do list. This is your link to share: 
                    <C.Link href={link} onClick={copyToClipboard}> {link}</C.Link></C.Paragraph>
                <C.Button onClick={copyToClipboard}>Copy Link</C.Button>
                <C.Paragraph>
                    {isLinkCopied ? 'Link copied to clipboard' : ''}
                </C.Paragraph>
            </C.Case>
        </C.Frame>
    )
}