import React, {useState} from 'react';
import "./tweet.css";

const Tweet = ({info}) => {
  const [toggle, setToggle] =useState(true)
  return (
    <div>
      <p className={toggle ? null : "clickp"}>{toggle ? `${info.substring(0, 47)}....` : info}
      <button type='button' className={toggle ? 'showBtn' : "showBtnClik"} onClick={()=> setToggle(!toggle)}>
        {toggle ? "show more" : "show less"}
      </button>
      </p>
    </div>
  )
}

export default Tweet