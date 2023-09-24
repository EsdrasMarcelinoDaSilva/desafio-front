import * as C from './style/HomeStyle'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    return(
        <C.Div>
            <C.Main>
                <C.Title>Create your to-do list and share it</C.Title>
                <C.SubTitle>Todo List</C.SubTitle>
                <C.Link onClick={() => navigate('/todolist')}>Access now</C.Link>
            </C.Main>
        </C.Div>
    )
}