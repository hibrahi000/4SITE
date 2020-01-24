import React, { Component } from 'react';
import Chart from 'react-apexcharts';

//this class works with apex.js and index.js to render
class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#3e4350',
          foreColor: '#fff'
        },
        xaxis: {
          //Label goes here (Company Names or employes names goes here)
          categories: [
            'Amazon',
            'Google',
            'Microsoft',
            'UPS',
            'FeDex',
            'Costco',
            'BJ/s',
            'Walmart',
            'Target',
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
          colors: ['#ee7600']
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
      markers: {
        strokeColors: ['#ee7600']
      },

      series: [
        {
          name: 'Population', //Data goes here (note: in this setion you can manipulate the #s to create the graph)
          data: [
            600000,
            400000,
            200000,
            12500,
            9622,
            15674,
            63025,
            14695,
            13949,
            10092,
            12908
          ]
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
        />
      </React.Fragment>
    );
  }
}

export default PopChart;
