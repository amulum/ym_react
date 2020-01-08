import React from 'react'
import '../styles/bootstrap.min.css'
import axios from 'axios'

const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl; 



// list berita yg akan ditampilkan
class BeritaTerkini extends React.Component {
    state = {
        listNews : [],
        isLoading : true
    }
    componentDidMount = () => {
        const self = this;
        axios
        .get(`${baseUrl}/top-headlines?sortBy=popularity&pageSize=5&country=id&apiKey=${apiKey}`)
        .then(function(response) {
            self.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            self.setState({ isLoading : false});
            // error handle
        })
    }
    
    render() {
        const { listNews, isLoading } = this.state;
        // filter news yang ada content dan imagenya
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.urlToImage !== null) {
                return item;
            }
            return false;
        });
        // logic loop untuk tiap berita yang akan ditampilkan
        const loopBerita = listNews.map((item, index)=> (
            <a href="#" style={{textDecoration:'None'}}>
                <li class="list-group-item text-secondary text-left">
                    <span class="badge badge-pill badge-danger">#{index+1}</span>
                    <span className='d-block'>{item.title}</span>
                </li>
            </a>
        ))

        return (
            // Top Article left side
            <div className='row'>
                <ul class="list-group">
                    <li class="list-group-item d-flex flex-row justify-content-between">
                        <span className='font-weight-bold text-info'>
                            BERITA TERKINI                            
                        </span>
                        <span className='font-smaller ml-lg-auto text-info'>
                            <a href="#" style={{textDecoration:'None'}}>lihat semua</a> 
                        </span>
                    </li>
                    {isLoading ?<div style={{textAlign:"center"}}><img className="App-logo-loading" src={require('../images/logo.svg')}/></div> : loopBerita }
                </ul>
            </div>
        )
    }
}

export default BeritaTerkini;