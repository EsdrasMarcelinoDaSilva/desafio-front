type TaskProps = {
    id: string
    text: string
    done: boolean
    onToggleDone: (id : string) => void
}

export default function Task({ id, text, done, onToggleDone }: TaskProps){
    return(
        <div>
            <input type="checkbox" checked={done} onChange={() => onToggleDone(id)} />
            <span style={done ? { textDecoration: 'line-through' } : {}}>{ text }</span>
        </div>
    )
}