import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import IdealDateForm from "./IdealDateForm";


export default function App(){
    return (
        <Router>
            <div className= "container">

                <Routes>
                    <Route element ={<Home/>} path="/" index />

                </Routes>
            </div>

        </Router>
    )
}