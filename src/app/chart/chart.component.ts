import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem, LinearScale, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    Chart.register(LinearScale);
    Chart.register(...registerables);
    const ctx = document.getElementById('myChart');
    if (!ctx) {
      console.error('Unable to find chart element');
      return;
    }
    const myChart = new Chart(ctx as ChartItem, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        onResize(chart, size) {
          chart.resize(size.width, size.height);
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}