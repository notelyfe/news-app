import React, { useState } from 'react'
import newsimg from './assets/cover.jpg'

const News = ({ title, description, imgUrl, newsurl, author, date }) => {

    const [ttl, setTtl] = useState(title)
    const [desc, setDesc] = useState(description)

    const slicingTitle = async () => {
        let titl = title.slice(0, 30)

        return titl
    }
    const getSliceTitle = async () => {
        const ttl = await slicingTitle(title)
        setTtl(ttl)
    }
    getSliceTitle();

    const slicingDesc = async () => {
        let des
        if (description !== null) {
            des = description.slice(0, 75)
        }
        else {
            des = description
        }
        return des
    }
    const getSliceDesc = async () => {
        const des = await slicingDesc(description)
        setDesc(des)
    }
    getSliceDesc();

    return (
        <>
            <div className="card" style={{ height: "30rem" }}>
                <img src={(imgUrl === null ? newsimg : imgUrl)} alt="" className="card-img-top" style={{ height: "135px" }} />
                <div className="card-body">
                    <div className="content" style={{height: "17rem"}}>
                        <h5 className="card-title">{ttl}...</h5>
                        <p className="card-text">{(description === null ? "No description available" : desc)}...</p>
                        <small className='text-muted'>By: {author === null ? "Unknown" : author}</small><br />
                        <small className='text-muted'>Posted on: {new Date(date).toGMTString()}</small><br />
                    </div>
                    <a href={newsurl} target="__blank" className="btn btn-dark">Go to news</a>
                </div>
            </div>
        </>
    )
}

export default News
