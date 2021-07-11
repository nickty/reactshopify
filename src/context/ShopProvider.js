import React, { useEffect, useState, createContext, Children } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STORE_ACCESS,
    domain: process.env.REACT_APP_DOMAIN
})
const shopContext = React.createContext()

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const fetchAllProducts = async () => {
        await client.product.fetchAll().then(products => {
             setProducts(products)
         })
         console.log('i am workign')
     }


    return (

        <shopContext.Provider value={{products}}>
            {children}
        </shopContext.Provider>
    )
}

export {shopContext}

export default ShopProvider
