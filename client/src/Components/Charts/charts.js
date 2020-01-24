import React, { Compents, Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  };

  render() {
    return (
      <div className="chart">
        <Bar
          id="bar"
          data={this.state.chartData}
          // width={500}
          // height={200}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In' + this.props.location,
              fontSize: 25,
              position: 'right',
              labels: {
                frontColor: '#000'
              }
            },
            legends: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                frontColor: '#000'
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />

        <Pie
          id="pie"
          data={this.state.chartData}
          // width={100}
          // height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In' + this.props.location,
              fontSize: 25,
              position: 'right',
              labels: {
                frontColor: '#000'
              }
            },
            legends: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                frontColor: '#000'
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />

        <Line
          id="line"
          data={this.state.chartData}
          // width={100}
          // height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In' + this.props.location,
              fontSize: 25,
              position: 'right',
              labels: {
                frontColor: '#000'
              }
            },
            legends: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                frontColor: '#000'
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
