/** @format */

import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export default function Chart(props: HighchartsReact.Props, options: Highcharts.Options) {
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} {...props} />
        </>
    )
}
