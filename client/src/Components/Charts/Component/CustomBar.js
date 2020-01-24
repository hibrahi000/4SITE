import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

class RadialBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 380,
          background: 'rgba(178, 207, 245, 0.698)'
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            }
          }
        },
        colors: [
          '#33b2df',
          '#546E7A',
          '#d4526e',
          '#13d8aa',
          '#A5978B',
          '#2b908f',
          '#f9a3a4',
          '#90ee7e',
          '#f48024',
          '#69d2e7'
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          color: '#fff',
          style: {
            colors: ['#fff']
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [
            'South Korea',
            'Canada',
            'United Kingdom',
            'Netherlands',
            'Italy',
            'France',
            'Japan',
            'United States',
            'China',
            'India'
          ]
        },
        yaxis: {
          labels: {
            show: false,
            color: '#fff'
          }
        },
        title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true,
          color: '#fff'
        },
        subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center',
          color: '#fff'
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return '';
              }
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={500}
          width={500}
        />
      </div>
    );
  }
}

export default RadialBarChart;
