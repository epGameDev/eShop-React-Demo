import { createContext, useState, useEffect, } from "react";
import PropTypes from "prop-types";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase-utils.js";

export const ProductsContext = createContext({
    productCategoryMap: {}
});

export const ProductsProvider = ({ children }) => {
    const [ productCategoryMap, setProductCategoryMap ] = useState({});
    const value =  { productCategoryMap };
    
    
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getCategoriesAndDocuments();
            setProductCategoryMap(data);
        }

        fetchData();
    }, []);
    

    // ? Used once to add product to firebase from a local collection.
    // useEffect( () => {
        //     const createData = async () => await createCollectionsAndDocuments('categories', SHOP_DATA);
        //     createData();
        // }, []);
        
        
    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}


ProductsProvider.propTypes = {
    children: PropTypes.any
}