// import React, { Component } from 'react';
// import Chart from 'react-apexcharts';


// class PieChart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             options: {
//                 chart: {
//                     background: '#f4f4fa',
//                     foreColor: '#333'
//                 },

//                 options = {
//                     series: [44, 55, 13, 33],
//                     labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
//                 }

//                 series: [44]

//         //         xaxis: {//Label goes here
//         //             categories: [
//         //                 'new York', 'Los Angeles', 'Chicago',
//         //                 'Houston', 'Philadelphia', 'Phoenix', 
//         //                 'San Antonio', 'San Diego', 'Dallas',
//         //                 'San Jose'
//         //             ]
//         //         },
//         //            //options
//         //             plotOptions: {
//         //                 bar: {
//         //                 horizontal: false
//         //                 }
//         //             },
//         //             fill: {
//         //                 colors: ['#f44336']
//         //             },
//         //             dataLabels: {
//         //                 enabled: false
//         //             },
//         //             title: {
//         //                 text: 'Largest Cities By Popuplation',
//         //                 align: 'cenetr',
//         //                 margin: 20,
//         //                 offSetY: 20,
//         //             style: {
//         //                 fontsize: '25px'
//         //             }
            
//         //         }
//         //     },
//         //         series: [{
//         //             name: 'Population',//Data goes here
//         //             data: [8550405, 3971883, 2720546,
//         //             2296224, 2296224, 1567442,
//         //             1563025,1469845, 1394928,
//         //             1300092, 1026908
//         //             ]
//         //         }]
//         //     }
//         // }

//     // onClick = () => {
//     //    this.setState({
//     //         options: {...this.state.options,
//     //             plotOptions: {...this.state.options.plotOptions,
//     //                 bar: {...this.state.options.plotOptions.bar,
//     //                     horizontal: !this.state.options.plotOptions.bar.horizontalS
//     //                 }
//     //             }
//     //         }});
//     // };


//     render() {
//         return (
//             <React.Fragment>
//             <Chart
//             options= {this.state.options}
//             series= {this.state.series}
//             type= "bar"
//             height= "450"
//             width= "100%"
//             />
//             <button onClick={this.onClick}>Change</button>
//             </React.Fragment>
//         );
      
//     }
// }

// export default PieChart;