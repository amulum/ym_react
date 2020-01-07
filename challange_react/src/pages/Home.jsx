import React from 'react'
import Header from '../component/Header'
import BeritaTerkini from  '../component/BeritaTerkini'
import News from './News'
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header/>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 ml-0">
                            <BeritaTerkini/>
                        </div>
                        <div className="col-md-8 mr-0">
                            <News/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;