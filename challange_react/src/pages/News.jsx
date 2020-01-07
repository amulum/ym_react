import React from 'react'
import axios from 'axios'
import MainBerita from '../component/MainBerita'

const apiKey = '7419a8308dcc44f987be1f6b8b402b63'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl; 

class News extends React.Component {
    state = {
        listNews : [],
        isLoading : true,
        category : 'entertainment'
    }
    componentDidMount = () => {
        const self = this;
        axios
        .get(`${baseUrl}/everything?q=${this.state.category}&sortBy=popularity&pageSize=10&apiKey=${apiKey}`)
        .then(function(response) {
            self.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            self.setState({ isLoading : false});
            // error handle
        })
    }

    render () {
        const { listNews, isLoading } = this.state;
        // filter news yang ada content dan imagenya
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.urlToImage !== null) {
                return item;
            }
            return false;
        });

        const headlineNews = topHeadlines.map((item, key) => {
            return (
                MainBerita(item.urlToImage,item.title, item.url, item.description, item.publishedAt)
            );
        });

        return (
            <div className="headlineNews">
                {isLoading ?<div style={{textAlign:"center"}}><img className="App-logo-loading" src={require('../images/logo.svg')}/></div> : headlineNews }
            </div>
        )

    }

}

export default News;