import { useEffect, useState } from "react";
import  Context  from "./Context";

const State = (props) => {

    const [auth, setAuth] = useState([])

    //fetching auth data
    const fetchData = async () => {
        const res = await fetch('https://note-portfolio-server.herokuapp.com/cred')
        const authData = await res.json()

        return authData
    }

    useEffect(() => {
        const getData = async () => {
            const authDataFromServer = await fetchData()
            setAuth(authDataFromServer)
        }
        getData()
    }, [])

    //fetching news
    const [news, setNews] = useState([])
    
    const fetchNews = async () => {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2bf87a9e81ac4266846fee136e618261')
        const newsData = await res.json()

        return newsData.articles;
    }

    useEffect(() =>{
        const getNews = async () => {
            const newsFromServer = await fetchNews()
            setNews(newsFromServer)
        }
        getNews()
    },[])

    return (
        <Context.Provider value={{auth, setAuth, news, setNews}} >
            {props.children}
        </Context.Provider>
    )
}

export default State;