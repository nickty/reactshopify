import React, { useContext } from 'react'
import { shopContext } from '../context/ShopProvider'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {

    const { products } = useContext(shopContext)
    return (
        <Box>
            <Grid templateColumns="repeat(2, 1fr)">
            {
                products.map(product => (
                    <Link to={`/product/${product.handle}`}>
                        <Box _hover={{opacity: '80%'}}>
                            <Image src={product.images[0].src} /> 
                            <Text>{product.title}</Text> 
                            <Text>${product.variants[0].price}</Text>
                        </Box>
                    </Link>
                    
                
                ))
            }
            </Grid>
        </Box>
    )
}

export default Home
