import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
const url = "https://timesofindia.indiatimes.com/topic/women-safety";
const url2 = "https://timesofindia.indiatimes.com/entertainment/malayalam/movies/news/ritika-singh-expresses-her-concern-about-the-rising-number-of-crimes-against-women-and-children-urges-parents-to-provide-kids-with-self-defense-training/articleshow/104046758.cms";
const url3 = "https://timesofindia.indiatimes.com/city/mumbai/rto-to-sensitise-auto-drivers-on-womens-safety-in-share-autos/articleshow/103700762.cms";
const url4 = "https://timesofindia.indiatimes.com/city/noida/man-molest-13-year-old-niece-held/articleshow/103677379.cms";
const url5 = "https://timesofindia.indiatimes.com/city/mumbai/make-state-safe-for-women-dial-103/articleshow/103226768.cms";
const Blog = () => (
  <div className="ws__blog section__padding" id="blog">
    <div className="ws__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We're here to keep you updated.</h1>
    </div>
    <div className="ws__blog-container">
      <div className="ws__blog-container_groupA">
        <Article imgUrl={blog01} Url={url} date="2023" text="Explore the stories shaping the future of women's safety today" />
      </div>
      <div className="ws__blog-container_groupB">
        <Article imgUrl={blog02} Url={url2} date="Sep 29, 2023" text="Ritika Singh expresses concern on rising crimes against women" />
        <Article imgUrl={blog03} Url={url3} date="Sep 16, 2023" text="RTO to sensitise auto drivers on women's safety in share autos" />
        <Article imgUrl={blog04} Url={url4} date="Sep 15, 2023" text="Man molest 13-year-old niece, held" />
        <Article imgUrl={blog05} Url={url5} date="Aug 31, 2023" text="Make State Safe for Women, Dial 103" />
      </div>
    </div>
  </div>
);

export default Blog;