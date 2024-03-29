import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase-utils.js";

export const ProductsContext = createContext({
    categoriesMap: {}
});

export const ProductsProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});
    const value =  { categoriesMap };
    
    
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getCategoriesAndDocuments();
            setCategoriesMap(data);
        }

        fetchData();
    }, []);
    
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