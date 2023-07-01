import React from 'react'
import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                <input placeholder="What's in your mind Safak?" className="shareInput" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
