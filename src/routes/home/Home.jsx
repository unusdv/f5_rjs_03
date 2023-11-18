import "./home.scss"
import { useState, useReducer, useEffect } from 'react'
import { MdFavoriteBorder } from "react-icons/md"
import { apiInstance } from "../../api"
import { Link } from "react-router-dom"


const reducer = (state, action) => {
    return action
}

const Home = () => {



    // RENDER DATA
    const [count, dispatch] = useReducer(reducer, [])

    // BIRINCHI USUL !!!!
    useEffect(() => {
        function renderData() {
            try {
                apiInstance("/products")
                    .then(response => dispatch(response.data))
            }
            catch (error) {
                console.log(error);
            }
        }
        renderData()
    }, [])

    // IKKINCHI USUL !!!!
    // useEffect(() => {
    //     fetch("https://api.escuelajs.co/api/v1/products")
    //         .then(response => response.json())
    //         .then(data => dispatch(data))
    // }, [])
    return (
        <>
            <div className='product-wrapper'>
                <div className="product__card-container">
                    {
                        count.splice(0, 30).map((product, index) =>
                            <div key={index} className='product-card'>
                                <div className="card-img">
                                    <img src={product.images} height={130} />
                                </div>
                                <div className="product-content">
                                    <h3>{product.title.slice(0, 20)}</h3>
                                    <p>{product.description.slice(0, 70)}</p>
                                    <div className="price-card">
                                        <strong>${product.price}</strong>
                                        <span>35% off</span>
                                    </div>
                                    <div className="card-btns">
                                        <Link className='view-btn' to={`product-view/${product.id}`}>View Deal  &#8599;</Link>
                                        <button className='like-btn'><i><MdFavoriteBorder /></i></button>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Home