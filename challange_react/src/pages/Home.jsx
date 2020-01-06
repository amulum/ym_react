import React from 'react'
import Header from '../component/Header'
import MainBerita from '../component/MainBerita'
import BeritaTerkini from  '../component/BeritaTerkini'

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
                            <MainBerita/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;