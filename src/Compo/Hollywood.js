import React, { useContext } from 'react';
import { ContextData } from './DataArticle';
import { Link } from 'react-router-dom';
import './Compo.css';

function Hollywood() {
  const [DData] = useContext(ContextData);
  return (
    <>
    <div className='normalpage'>
    <div className='section_one'>
    <div className='toptext'><span className='tophead'>Holly</span><span>wood</span></div>
      {DData.filter((item) => item.cate === 'Hollywood').map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container'>
           <p className='cardhead' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle' src={data.image} alt={"not found"}/>
        <p className='shortnote'>{data.short_desc}</p>
        <span className='cate cd'>{data.cate}</span><span className='cate cd'>{data.date}</span>
        <hr className='hrline_move'/>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='section_two'>
      <div className='toptext'><span className='tophead'>Top </span><span>Post</span></div>
      {DData.filter((item) => item.cate === 'Hollywood' && item.id === 39).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container1'>
           <img className='picstyle2' src={data.image} alt={"not found"}/>
           <p className='cardhead2' key={data.id}>{data.heading} </p>
           <span className='date1 cd'>{data.cate}</span><span className='date1'>{data.date}</span>
           <hr className='hrlinetop'/>
           </div>
           </Link>
        </>
      ))}
      {DData.filter((item) => item.cate === 'Hollywood' && item.id % 4 === 0).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container2'>
           <p className='cardhead3' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle1' src={data.image} alt={"not found"}/>
        <span className='date cd'>{data.cate}</span><span className='date cd'>{data.date}</span>
        <hr className='hrlinetop1'/>
           </div>
           </Link>
        </>
      ))}
      {DData.filter((item) => item.cate === 'adv' && item.id === 73).map((data) => (
        <img className='adv' src={data.image} alt={"not found"}/>
      ))}
      </div>
    </div>
    </>
  );
}

export default Hollywood
