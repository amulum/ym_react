import React from 'react'
import Header from '../component/Header'
import BeritaTerkini from  '../component/BeritaTerkini'
import News from './News'
class Home extends React.Component {
    state = {
        catHeader : [
            'Football',
            'Economic',
            'Politic',
            'Entertainment',
            'Movie'
        ],
        selected : 'Popular',
        loading : true
    }
    
    cobaClick = async (sesuatu) => {
        await this.setState({selected : sesuatu})
        console.log(this.state.selected)
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header lstCategory={this.state.catHeader} cobaClick={this.cobaClick}/>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 ml-0">
                            <BeritaTerkini/>
                        </div>
                        <div className="col-md-8 mr-0">
                            <News selectedCategory={this.state.selected} isLoading={this.state.loading}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;