import createStore from 'unistore'
import axios from 'axios'
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
    selected : 'Popular',
    isLoading : true
};

export const store = createStore(initialState);

export const actions = store => ({
    cobaClick : async (state,sesuatu) => {
        await store.setState({selected : sesuatu})
        store.setState({isLoading: true})
        const self = this;
        console.log(initialState.selected)
        axios
        .get(`${baseUrl}/everything?q=${initialState.selected}&sortBy=popularity&pageSize=5&apiKey=${apiKey}`)
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
        let value = event.target.value;
        await store.setState({ search: value });
        store.cariBerita(value);
    },
    
    cariBerita : async (state,keyword) => {
    const self = this;
    if (keyword.length > 3) {
        store.setState({isLoading: true})
        try {
            const response = await axios.get(
                baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
            );
            self.setState({ listNews: response.data.articles, isLoading : false});
        } catch (error) {
            console.error(error);
        }}
    }

});