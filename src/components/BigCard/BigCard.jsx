import React from 'react'
import "./BigCard.css"
import AreaChartComponent from '../AreaChartComponent/AreaChartComponent'
import BarChartComponent from '../BarChartComponent/BarChartComponent'

function BigCard(props) {
    return (
        <div className="bigCard">
            <div className="heading">
                {props.heading}
            </div>
            <div className="subheading">
                {props.subHeading}
            </div>
            <br />
            {props.chart==="bar"?<BarChartComponent/>:<AreaChartComponent/>}
        </div>
    )
}

export default BigCard
