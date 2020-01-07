import React from 'react'
import Header from '../component/Header'

class SignIn extends React.Component {
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
            <Header lstCategory={this.state.catHeader} cobaClick={this.cobaClick}/>
        )
    }
}

export default SignIn;