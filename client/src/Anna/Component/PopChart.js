import React, { Component } from 'react';
import Chart from 'react-apexcharts';

//this class works with apex.js and index.js to render
class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4fa',
                    foreColor: '#333'
                },
                xaxis: {//Label goes here (Company Names or employes names goes here)
                    categories: [
                        'Amazon', 'Google', 'Microsoft',
                        'UPS', 'FeDex', 'Costco', 
                        'BJ/s', 'Walmart', 'Target',
                        'Macy'
                    ]
                },
                   //options
                    plotOptions: {
                        bar: {
                        horizontal: false
                        }
                    },
                    fill: {
                        colors: ['#f44336']
                    },
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: 'Largest Employee Ratio/s By Popuplation',
                        align: 'cenetr',
                        margin: 20,
                        offSetY: 20,
                    style: {
                        fontsize: '25px'
                    }
            
                }
            },
                series: [{
                    name: 'Population',//Data goes here (note: in this setion you can manipulate the #s to create the graph)
                    data: [600000, 400000, 200000,
                        12500, 9622, 15674,
                        63025,14695, 13949,
                        10092, 12908
                        ]
                    // data: [8550405, 3971883, 2720546,
                    // 2296224, 2296224, 1567442,
                    // 1563025,1469845, 1394928,
                    // 1300092, 1026908
                    // ]
                }]
            }
        }

    onClick = () => {
       this.setState({
            options: {...this.state.options,
                plotOptions: {...this.state.options.plotOptions,
                    bar: {...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontalS
                    }
                }
            }});
    };
    render() {
        return (
            <React.Fragment>
            <Chart
            options= {this.state.options}
            series= {this.state.series}
            type= "bar"
            height= "450"
            width= "100%"
            />
            <button onClick={this.onClick}>Change</button>
            </React.Fragment>
        );
      
    }
}

export default PopChart;