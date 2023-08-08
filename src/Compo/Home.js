import React, { useContext } from 'react';
import { ContextData } from './DataArticle';
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './Compo.css';

function Home() {
  const [DData] = useContext(ContextData);

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div className='ArticleHome'>
    <div className='firstpost' id='slider'>
    <figure>
      <div className='onecompo'>
        {DData.filter((item) => item.cate === 'Home' && item.id === 1).map((data) => (
          <div key={data.id} className='imgContainer'>
            <Link to={`/article/${data.id}`}>
              <div className='Home_p1' style={{ backgroundImage: `url(${data.image})` }}>
                <p className='cardhead_one'>{data.heading}</p>
                <div className='firsthead_one'>
                  <span>{data.cate}</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='twocompo'>
        {DData.filter((item) => item.cate === 'Home' && item.id === 4).map((data) => (
          <div key={data.id} className='imgContainer1'>
            <Link to={`/article/${data.id}`}>
              <div className='Home_p2' style={{ backgroundImage: `url(${data.image})` }}>
                <p className='cardhead_two'>{data.heading}</p>
                <div className='firsthead_two'>
                  <span>{data.cate}</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='threecompo'>
        {DData.filter((item) => item.cate === 'Home' && item.id === 7).map((data) => (
          <div key={data.id} className='imgContainer1'>
            <Link to={`/article/${data.id}`}>
              <div className='Home_p2' style={{ backgroundImage: `url(${data.image})` }}>
                <p className='cardhead_two'>{data.heading}</p>
                <div className='firsthead_two'>
                  <span>{data.cate}</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </figure>
    </div>
      {/* <> */}
      {/* Render the Slider component only for screens within the specified range */}
      {/* {window.innerWidth >= 280 && window.innerWidth <= 500 ? (
        <div className='slider-container'>
          <Slider {...sliderSettings}>
            {DData.filter((item) => item.cate === 'Home').map((data) => (
              <div key={data.id} className='slider-item'>
                <Link to={`/article/${data.id}`}>
                  <div className='slider-image' style={{ backgroundImage: `url(${data.image})` }}>
                    <div className='slider-content'>
                      <p className='cardhead'>{data.heading}</p>
                      <div className='firsthead'>
                        <span>{data.cate}</span>
                        <span>{data.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        // Render individual items for normal web view
        <>
          <div className='onecompo'>
            {DData.filter((item) => item.cate === 'Home' && item.id === 1).map((data) => (
              <div key={data.id} className='imgContainer'>
                <Link to={`/article/${data.id}`}>
                  <div className='Home_p1' style={{ backgroundImage: `url(${data.image})` }}>
                    <p className='cardhead_one'>{data.heading}</p>
                    <div className='firsthead_one'>
                      <span>{data.cate}</span>
                      <span>{data.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='twocompo'>
            {DData.filter((item) => item.cate === 'Home' && item.id === 4).map((data) => (
              <div key={data.id} className='imgContainer1'>
                <Link to={`/article/${data.id}`}>
                  <div className='Home_p2' style={{ backgroundImage: `url(${data.image})` }}>
                    <p className='cardhead_two'>{data.heading}</p>
                    <div className='firsthead_two'>
                      <span>{data.cate}</span>
                      <span>{data.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='threecompo'>
            {DData.filter((item) => item.cate === 'Home' && item.id === 7).map((data) => (
              <div key={data.id} className='imgContainer1'>
                <Link to={`/article/${data.id}`}>
                  <div className='Home_p2' style={{ backgroundImage: `url(${data.image})` }}>
                    <p className='cardhead_two'>{data.heading}</p>
                    <div className='firsthead_two'>
                      <span>{data.cate}</span>
                      <span>{data.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </>
      )}
      </> */}

      {/* top most part */ }
      
      <div className='toptext2_1'><span className='tophead'>The </span><span>Latest</span></div>
      <div className='topmover'>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 2 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <img className='picstyle23' src={data.image} alt={"not found"}/>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 5 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <img className='picstyle23' src={data.image} alt={"not found"}/>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 8 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <img className='picstyle23' src={data.image} alt={"not found"}/>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      </div>
         {/* middle part */ }
      <div className='toptext2_12'><span className='tophead'>Latest</span><span> Articles</span></div>
      <div className='articlemove'>
      <div className='section_ones'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 10).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_123'>
           <p className='cardhead' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle' src={data.image} alt={"not found"}/>
        <p className='shortnote'>{data.short_desc}</p>
        <span className='cate cd'>{data.cate}</span><span className='cate cd'>{data.date}</span>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='section_ones'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 3).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_123'>
           <p className='cardhead' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle' src={data.image} alt={"not found"}/>
        <p className='shortnote'>{data.short_desc}</p>
        <span className='cate cd'>{data.cate}</span><span className='cate cd'>{data.date}</span>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='section_ones'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 11).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_123'>
           <p className='cardhead' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle' src={data.image} alt={"not found"}/>
        <p className='shortnote'>{data.short_desc}</p>
        <span className='cate cd'>{data.cate}</span><span className='cate cd'>{data.date}</span>
           </div>
           </Link>
        </>
      ))}
      </div>
      </div>
      {DData.filter((item) => item.cate === 'adv' && item.id === 73).map((data) => (
        <img className='adv1' src={data.image} alt={"not found"}/>
      ))}
    
      <div className='toptext2_123'><span className='tophead'>Top </span><span> Post</span></div>
      <div className='toplast_one'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 3).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container1 na'>
           <img className='picstyle2_two' src={data.image} alt={"not found"}/>
           <p className='cardhead2' key={data.id}>{data.heading} </p>
           <span className='date1 cd'>{data.cate}</span><span className='date1'>{data.date}</span>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='holdit'>
      <div className='testthis'>
     {DData.filter((item) => item.cate === 'Home' && item.id === 6).map((data) => (
      <Link key={data.id} to={`/article/${data.id}`}>
      <div className='Container2 naa'>
        <p className='cardhead3' key={data.id}>{data.heading}</p>
        <img className='picstyle1_1' src={data.image} alt={"not found"} />
        <div className='date'><span>{data.cate}</span><span>{data.date}</span></div>
        </div>
      </Link>
      ))}
      </div>
      <div className='testthis'>
     {DData.filter((item) => item.cate === 'Home' && item.id === 9).map((data) => (
      <Link key={data.id} to={`/article/${data.id}`}>
      <div className='Container2 naa'>
        <p className='cardhead3' key={data.id}>{data.heading}</p>
        <img className='picstyle1_1' src={data.image} alt={"not found"} />
        <div className='date'><span>{data.cate}</span><span>{data.date}</span></div>
        </div>
      </Link>
      ))}
      </div>
      </div>
      {/* end div part */ }
      <div className='fourcompo'>
        {DData.filter((item) => item.cate === 'Bollywood' && item.id === 15).map((data) => (
          <div key={data.id} className='imgContainer1'>
            <Link to={`/article/${data.id}`}>
              <div className='Home_p3' style={{ backgroundImage: `url(${data.image})` }}>
                <p className='cardhead_two ed'>{data.heading}</p>
                <div className='firsthead_two'>
                  <span>{data.cate}</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* end part */ }
      <div className='toptext2_12 ed2'><span className='tophead'>Latest</span><span> Articles</span></div>
      <div className='topmover'>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 2 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 5 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='movetop'>
      {DData.filter((item) => item.cate === 'Home' && item.id === 8 ).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container_latest'>
           <p className='cardhead2_2' key={data.id}>{data.heading} </p>
           <p className='shortnote_2'>{data.short_desc}</p>
           <div className='Datethis'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           </Link>
        </>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Home;


