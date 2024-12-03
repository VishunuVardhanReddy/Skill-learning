<script>
        document.addEventListener('DOMContentLoaded', function () {
            // 1. Real-Time Line Chart
            let lineCtx = document.getElementById('lineChart').getContext('2d');
            let lineChart = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [{
                        label: 'Real-Time Data',
                        backgroundColor: 'rgba(0, 119, 204, 0.3)',
                        borderColor: 'rgb(0, 119, 204)',
                        data: [0, 10, 5, 2, 20]
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true
                        },
                        y: {
                            display: true,
                            beginAtZero: true
                        }
                    }
                }
            });

            // Update Line Chart Data Every 2 Seconds
            setInterval(function () {
                let randomValue = Math.floor(Math.random() * 40);
                lineChart.data.datasets[0].data.push(randomValue);
                lineChart.data.labels.push('New Label');
                lineChart.update();
            }, 2000);
            // 2. Real-Time Bar Chart
            let barCtx = document.getElementById('barChart').getContext('2d');
            let barChart = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ['A', 'B', 'C', 'D', 'E'],
                    datasets: [{
                        label: 'Real-Time Data',
                        backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
                        data: [12, 19, 3, 5, 2]
                    }]
                },
                options: {
                    responsive: true,
                    scales
					: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Update Bar Chart Data Every 3 Seconds
            setInterval(function () {
                let randomValues = Array.from({length: 5}, () => Math.floor(Math.random() * 20));
                barChart.data.datasets[0].data = randomValues;
                barChart.update();
            }, 3000);

            // 3. Real-Time Pie Chart
            let pieCtx = document.getElementById('pieChart').getContext('2d');
            let pieChart = new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow'],
                    datasets: [{
                        label: 'Real-Time Data',
                        backgroundColor: ['red', 'blue', 'yellow'],
                        data: [10, 20, 30]
                    }]
                },
                options: {
                    responsive: true
                }
            });
            // Update Pie Chart Data Every 4 Seconds
            setInterval(function () {
                let randomValues = Array.from({length: 3}, () => Math.floor(Math.random() * 50));
                pieChart.data.datasets[0].data = randomValues;
                pieChart.update();
            }, 4000);
            // 4. Real-Time Doughnut Chart
            let doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
            let doughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Red', 'Blue', 'Green', 'Purple'],
                    datasets: [{
                        label: 'Real-Time Data',
                        backgroundColor: ['red', 'blue', 'green', 'purple'],
                        data: [25, 25, 25, 25]
                    }]
                },
                options: {
                    responsive: true
                }
            });
			
			
            // Update Doughnut Chart Data Every 5 Seconds
            setInterval(function () {
                let randomValues = Array.from({length: 4}, () => Math.floor(Math.random() * 40));
                doughnutChart.data.datasets[0].data = randomValues;
                doughnutChart.update();
            }, 5000);
        });
