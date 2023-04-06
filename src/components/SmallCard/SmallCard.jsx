import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className='smallCard'>
            <div className="smallHeading">
                {props.smallHeading}
            </div>
            <div className="count">
                <div>{props.count}</div>
                <div className='icons'>{props.icon && <i className={props.icon}/>}</div>
            </div>
            <div className="percent">
                {props.percent > 1 && <div className='green'>{props.percent}%</div>}
                {props.percent < 1 && <div className='red'>{props.percent}%</div>}
                <div className='days'>({props.days} days)</div>
            </div>
        </div>
    )
}

export default SmallCard
