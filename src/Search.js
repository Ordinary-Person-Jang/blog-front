import React, { useState } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchData from "./Data/SearchData.js"
import "./CSS/Search.scss"
import UserPic from "./img/userPic/USER_1.jpg"
function Search() {
  const [data, setData] = useState(SearchData);
  return (
    <div className="Container">
      <div className="search-tool-box">
        <div className="search-tool-wrap">
          <div className="icon-wrap">
            <p><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></p>
          </div>
          <input type="text" placeholder="검색어를 입력해주세요"></input>
        </div>
      </div>
      <div className="result-box">
        {
          data.map(function(e, i){
            return(
              <SearchCard data={e} Num={i} key={i}/>
            )
          })
        }
      </div>
    </div>
  )

  function SearchCard(props) {
    return(
      <div className="searchcard-wrap">
        <div className="searchcard-header">
          <div className="img-wrap">
            <img src={UserPic}></img>
          </div>
          <h6>DevJang</h6>
        </div>
        <div className="searchcard-article">
          <h2>제목</h2>
          {/* <img></img> */}
          <p>내용</p>
        </div>
        <div className="searchcard-footer">
          <small className="card-createDate">2021-06-21</small>
        </div>
      </div>
    )
  }
}

export default Search
