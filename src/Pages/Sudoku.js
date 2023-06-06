import {useParams} from "react-router-dom"
 
export default function Sudoku() {
    const{ difficulty } = useParams()
    
    return (
        <div className="App">
            <h2>{difficulty}</h2>
            
        </div>
    )
}