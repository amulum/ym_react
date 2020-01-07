import React from 'react'
import Header from '../component/Header'
import BeritaTerkini from  '../component/BeritaTerkini'
import News from './News'
import axios from 'axios'

const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://newsapi.org/v2/'


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
        isLoading : true,
        listNews : []
    }
    
    cobaClick = async (sesuatu) => {
        await this.setState({selected : sesuatu})
        this.setState({isLoading: true})
        const self = this;
        axios
        .get(`${baseUrl}/everything?q=${self.state.selected}&sortBy=popularity&pageSize=5&apiKey=${apiKey}`)
        .then(function(response) {
            self.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            self.setState({ isLoading : false});
            // error handle
        })
    }

    componentDidMount = () => {
        const self = this;
        console.log(self.state.selected)
        axios
        .get(`${baseUrl}/everything?q=${self.state.selected}&sortBy=popularity&pageSize=5&apiKey=${apiKey}`)
        .then(function(response) {
            self.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            self.setState({ isLoading : false});
            // error handle
        })
    }

    inputChange = async event => {
        let value = event.target.value;
        await this.setState({ search: value });
        this.cariBerita(value);
    };
    
    cariBerita = async keyword => {
    const self = this;
    if (keyword.length > 3) {
        self.setState({isLoading: true})
        try {
            const response = await axios.get(
                baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
            );
            self.setState({ listNews: response.data.articles, isLoading : false});
        } catch (error) {
            console.error(error);
        }
    }
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header 
                        lstCategory={this.state.catHeader} 
                        cobaClick={this.cobaClick}
                        doSearch={(event) => this.inputChange(event)}
                        keyword={this.state.search}
                        placeholder="mau cari apa"
                    />
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 ml-0">
                            <BeritaTerkini/>
                        </div>
                        <div className="col-md-8 mr-0">
                            <News listNews={this.state.listNews} isLoading={this.state.isLoading}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;