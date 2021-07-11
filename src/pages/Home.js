import React, { useContext } from 'react'
import { shopContext } from '../context/ShopProvider'

const Home = () => {

    const { products } = useContext(shopContext)
    return (
        <div>
           {JSON.stringify(products)}
        </div>
    )
}

export default Home
