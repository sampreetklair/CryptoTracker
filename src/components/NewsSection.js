import React from 'react';

const NewsSection = ({ news }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingInline: 10 }} id="news-cards">
      {news.length === 0 ? (
        <div className="col text-left">Loading...</div>
      ) : (
        news.map((newsItem, index) => (
          <div className="col text-left" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.description}</p>
                <a href={newsItem.link} className="card-link" target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsSection;
