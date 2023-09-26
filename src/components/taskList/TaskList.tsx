import Task from "../task/Task"

export type TaskProps = { 
    id: string
    text: string
    done: boolean
}

type TaskListProps = {
    tasks: TaskProps[]
    onToggleDone: (id: string) => void
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