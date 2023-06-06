import { Button } from '@mui/material'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>
                        Sudoku App
                    </h1>
                </div>
                <Link to="/Easy">
                <Button variant="contained"> Easy </Button>
                </Link>        
                <Link to="/Medium">
                    <Button variant="contained"> Medium </Button>
                </Link>    
                <Link to="/Hard">
                    <Button variant="contained"> Hard </Button>
                </Link>    
            </header>
        </div>

    )
}