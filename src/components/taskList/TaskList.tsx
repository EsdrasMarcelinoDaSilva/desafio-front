import Task from "../task/Task"

export type TaskProps = { 
    id: number
    text: string
    done: boolean
}

type TaskListProps = {
    tasks: TaskProps[]
    onToggleDone: (id: number) => void
}

export default function TaskList({ tasks, onToggleDone }: TaskListProps){
    return(
        <div>
            {tasks.map((task) => (
                <Task key={task.id} { ...task } onToggleDone={onToggleDone} />
            ))}
        </div>
    )
}