import React from 'react'
import './CSS/ViewPage.scss';
import {FaHeart, FaShareAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';

function ViewPage() {
  return (
    <div className="container">
      <div className="content-wrap">
        {/*게시글 상단 시작*/}
        <div className="content-header">
          <div className="content-title">
            <h1>2021 개발자 필독서 55권 (1)</h1>
          </div>
          <div className="content-info">
            <div className="content-info-left">
              <Link to="/@DevJang">
                <h6>DevJang</h6>
              </Link>
              <span>·</span>
              <span>6일 전</span>
            </div>
            <div className="content-info-right">
              <div className="favorite-icon"><FaHeart/></div>
              <div className="share-icon"><FaShareAlt/></div>
            </div>
          </div>
          <div className="content-thumbnail">
            썸네일
            <img className="thumbnail"></img>
          </div>
        </div>
        {/*게시글 상단 끝*/}

        {/*게시글 본문 시작*/}
        <div className="content-article">
          <p>게시글</p>
        </div>
        {/*게시글 본문 끝*/}

      </div>
    </div>
  )
}

export default ViewPage
