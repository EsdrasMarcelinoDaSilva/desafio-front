import * as C from './style/TodoListStyle'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { v4 as uuidv4 } from "uuid"
import copy from "copy-to-clipboard"
import TaskList, { TaskProps } from "../taskList/TaskList"


export default function TodoList(){
    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState<Array<TaskProps>>([])
    const [text, setText] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks')
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = () => {
        const allTasks = text.split('\n').map(taskText => ({ id: uuidv4(), text: taskText, done: false}))
        setTasks(oldTasks => [...oldTasks, ...allTasks ])
        setText('')
    }

    const createList = () => {
        if(title === '' || tasks.length === 0){
            toast.warn('Please fill in all fields before creating the list')
        }else{
            const listId = uuidv4()
            const taskIds = tasks.map(task => task.id)
            const listLink = `${window.location.origin}/list/${listId}/tasks/${taskIds.join('-')}`
            localStorage.setItem(listId, JSON.stringify(tasks))
            navigate(`/list/${listId}`, { state: { tasks, title }})
            copy(listLink)
            toast.success('The list has been created successfully! Link copied to clipboard')
            console.log('link to the list', listLink)
        }
    }

    return(
        <C.Box>
            <C.CenterBox>
                <C.Title>
                    New Task List
                </C.Title>
                <C.FieldSet>
                    <C.Legend>Titulo da lista*</C.Legend>
                    <C.FieldTitle value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="List title"
                    />
                </C.FieldSet>
                <C.FieldSet>
                <C.Legend>Tarefas devem ser separadas por linha*</C.Legend>
                <C.FieldTask value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="New Task"
                />
                </C.FieldSet>
                <C.Section>
                    <C.Button onClick={addTask}>add task</C.Button>
                    <C.Button onClick={createList}>create list</C.Button>
                </C.Section>
            </C.CenterBox>
            <C.Div>
                <TaskList tasks={tasks} onToggleDone={() => {}} />
                {tasks.length > 0 && <C.Button onClick={() => setTasks([])}>Clear</C.Button>}
            </C.Div>
        </C.Box>
    )
}