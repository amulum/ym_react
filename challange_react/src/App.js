import React from 'react';
import './App.css';
import './styles/bootstrap.min.css'
import Home from './pages/Home'
import Header from './component/Header'
import BeritaTerkini from './component/BeritaTerkini'
import MainBerita from './component/MainBerita'
import MainRoute from "./Routes/MainRoute"

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <MainRoute />
            </div>
        )
    }
}

export default App;