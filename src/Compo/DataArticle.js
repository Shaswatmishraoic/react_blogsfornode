import React, { createContext, useState } from 'react';
import Demo from './Demo';


export const Store = createContext();

function DataArticle(){
    const [data, setData] = useState([
        {
            id:1,
            heading:'5G Technology',
            image:"blogweb/Article/Tech img/a5ba713859dbcdfc73b104275d2fecd7.jpg",
            description:'./Article/Technology/G Technology The Next Generation o.txt',
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
        <Store.Provider value= {[data, setData]}>
            <Demo/>
            
        </Store.Provider>
    )
}

export default DataArticle;