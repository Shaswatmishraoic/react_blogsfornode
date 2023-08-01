import React, { createContext, useState } from 'react';
// import Demo from './Demo';
import PropTypes from 'prop-types'

export const ContextData = createContext();

export const DataArticle = (props) => {
    DataArticle.propTypes = {
      children: PropTypes.node.isRequired,
    };
    const [data, setData] = useState([
        {
            id:1,
            heading:'5G Technology',
            image:"",
            description:'',
            short_desc:'How 5G Technology is changing the world',
            cate:'Technology'
        },
        {
            id:2,
            heading:'Quantum Computing',
            image:"",
            description:'',
            short_desc:'Changing computing power with Quantum computing',
            cate:'Technology'
        },
        {
            id:3,
            heading:'Artificial Intelligence (AI) Advancements',
            image:"",
            description:'',
            short_desc:'See how world is changing with AI',
            cate:'Technology'
        },
       
    ])
    return (
        <ContextData.Provider value= {[data, setData]}>
         {props.children}
        </ContextData.Provider>
    )
}

export default DataArticle;