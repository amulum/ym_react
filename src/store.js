import createStore from 'unistore'
import axios from 'axios'
import { select } from 'async';
import { Redirect } from 'react-router-dom'
const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://newsapi.org/v2/'

const initialState = {
// SIGNIN ELEMENT
    api_key : '',
    email : 'testing email',
    password : '',
    isLogin : false,
// HEADER ELEMENT
    catHeader : [
        'Football',
        'Economic',
        'Politic',
        'Entertainment',
        'Movie'
    ],
// GENERATE NEWS ELEMENT
    listNews : [],
    selected : '',
    isLoading : true,
};

export const store = createStore(initialState);

export const actions = store => ({
    // HEADER NAV
    cobaClick : (state,sesuatu) => {
        store.setState({ isLoading: true })
        const self = this;
        axios.get(`${baseUrl}/everything?q=${sesuatu}&sortBy=popularity&pageSize=5&apiKey=${apiKey}`)
        .then(function(response) {
            store.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            store.setState({ isLoading : false});
            // error handle
        })
    },

    inputChange : async (state,event) => {
        let keyword = event.target.value;
        console.log(keyword)
        if (keyword.length > 3) {
            store.setState({isLoading: true})
            try {
                const response = await axios.get(
                    baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
                );
                store.setState({ listNews: response.data.articles, isLoading : false});
            } catch (error) {
                console.error(error);
            }}
        
    },

    postSignout : (state) => {
        store.setState({isLogin : false})
        store.setState({api_key : ''})
        store.setState({email : ''})
        store.setState({password : ''})
    }

});