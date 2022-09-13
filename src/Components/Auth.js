import React, { useContext, useState } from 'react'
import './auth.css'
import Context from './context/Context'
import News from './News'

const Auth = () => {


    const context = useContext(Context)
    const { auth, news } = context

    const handelId = (e) => {
        e.preventDefault()
        setId(e.target.value)
    }
    const handelpwd = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const check = (e) => {
        e.preventDefault()
        auth.map((detail) => {
            if ((detail.userId === id) && (detail.pass === password)) {
                setNewsItem(true)
            }
            else {
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                }, 1000);
            }
        })
    }
    const [newsItem, setNewsItem] = useState(false)
    const [alert, setAlert] = useState(false)

    return (
        <div className='auth-bg' style={{ marginTop: "7vh", width: "100%", height: "93vh" }}>
            {(newsItem === false) ? <div className='container rounded py-2'
                style={{
                    position: "relative",
                    top: "15vh",
                    border: "2px solid grey",
                    maxWidth: "350px"
                }}>
                <h3 className='text-center my-2'>LogIn</h3>
                <hr />
                <small className={`text-danger d-${(alert === true) ? "block" : "none"}`}>Invalid Credentials</small>
                <form>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label ">User Id</label>
                        <input type="text"
                            className="form-control auth-bg"
                            id="userId"
                            aria-describedby="useId"
                            value={id}
                            onChange={handelId} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control auth-bg"
                            id="pwd"
                            value={password}
                            onChange={handelpwd} />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary auth-bg text-dark"
                        onClick={check}
                    >Log In</button>
                </form>
            </div> :
                <div className='row justify-content-center m-auto' style={{ width: "90%"}}>
                    <h1 className='text-center py-2'>Top Headlines</h1>
                    {news.map((element) => {
                        return <div className='my-2 mx-2 container' key={element.url} style={{width: "18rem",}}>
                            <News
                                title={element.title}
                                description={element.description}
                                imgUrl={element.urlToImage}
                                newsurl={element.url} 
                                author={element.author}
                                date={element.publishedAt}/>
                        </div>
                    })}
                </div>}
        </div>
    )
}

export default Auth
