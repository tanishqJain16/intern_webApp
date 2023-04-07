import React from 'react'
import "./BigCard.css"
import BarChart from '../BarChart/BarChart'
import AreaChartComponent from '../AreaChart/AreaChart'

function BigCard(props) {
    return (
        <div className="bigCard">
            <div className="heading">
                {props.heading}
            </div>
            <div className="subheading">
                {props.subHeading}
            </div>
            {props.chart==="bar"?<BarChart/>:<AreaChartComponent/>}
        </div>
    )
}

export default BigCard
