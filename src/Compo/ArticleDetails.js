import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { ContextData } from './DataArticle';
import { Link } from 'react-router-dom';
import Newnav from './Newnav';
import img1 from '../pic/Mask Group 21.png';
import img2 from '../pic/icons8-facebook-50.png';
import img3 from '../pic/icons8-instagram-50.png';
import img4 from '../pic/icons8-twitter-squared-50.png';
import img5 from '../pic/icons8-youtube-64.png';
import img6 from '../pic/rythm.svg';
import img7 from '../pic/share.svg';
import axios from 'axios';

function ArticleDetails() {
  const { id } = useParams();
  // const [data] = useContext(ContextData);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://bloging-hcu6.onrender.com/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const article = data.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  let category;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === parseInt(id)) {
      category = data[i].cate;
      break;
    }
  }

  // Filter related articles with the same category, excluding the current article
  const relatedArticles = data
    .filter((item) => item.id !== parseInt(id) && item.cate === category)
    .slice(0, 3);
    

  return (
    <>
    <Newnav/>
      <h1 className='Aheading'>{article.heading}</h1>
      <img className='logo1' src={img1} alt="Mask"/>
      <img className='sm logo_1' src={img2} alt='not'/>
      <img className='sm logo2' src={img3} alt='not'/>
      <img className='sm logo3' src={img4} alt='not'/>
      <img className='logo4' src={img5} alt='not'/>
      <img className='logo5' src={img6} alt='not'/>
      <img className='logo6' src={img7} alt='not'/>
      <span className='name'>Shaswat Mishra</span>
      <div className='timeonly'>
      <span>{article.time}</span>
      <span>{article.date}</span>
      </div>
      <img className='Apic' src={article.image} alt="not found" />
      <p className='Pdec'>{article.description}</p>
      <img className='logo7' src={img6} alt='not'/>
      <hr className='endline1'/>
      <img className='logoend' src={img1} alt="Mask"/>
      <span className='write'>WRITTEN BY</span>
      <span className='namelast'>Shaswat Mishra</span>
      <div className='timedayend'><span>{article.time}</span><span>{article.date}</span></div>
      <hr className='endline1'/>
    
      {/* lower level part */}
    <div className='endpart'>
    <span className='more'>More From The Siren</span>
        <hr className='endline'/>
        <div className='Lastpart'>
          {relatedArticles.map((data) => (
            <Link key={data.id} to={`/article/${data.id}`}>
              <span className='related'>Related Read</span>
              <div className='Container1_1'>
                <img className='picstyle2' src={data.image} alt={"not found"} />
                <p className='cardhead23' key={data.id}>{data.heading}</p>
                <img className='logo1one' src={img1} alt="Mask"/>
                <span className='name2'>Shaswat Mishra</span>
                <div className='timeday'><span>{data.time}</span><span>{data.date}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticleDetails;


