import { FC } from 'react';
import './Body.scss';
import SmallBox from './SmallBox';
import icon from '../../assets/icons/icons.svg';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    heading: 'Average response Time',
    color: '#f05d23',
    records: [
      {
        title: 'Average Response Time',
        result: '30 Mins',
      },
      {
        title: 'Response Time',
        result: '1 Hour 30 Mins',
      },
    ],
  },
  {
    heading: 'Replies per resolution',
    color: '#3E68FF',
    records: [
      {
        title: 'Average Replies',
        result: '30 Mins',
      },
      {
        title: 'Response Time',
        result: '1 Hour 30 Mins',
      },
    ],
  },
  {
    heading: 'Average resolution time',
    color: '#FB6491',
    records: [
      {
        title: 'Average Resolution Rate',
        result: '30 Mins',
      },
      {
        title: 'Response Time',
        result: '1 Hour 30 Mins',
      },
    ],
  },
  {
    heading: 'First contact resolution rate',
    color: '#07C9E2',
    records: [
      {
        title: 'Average Contact Rate',
        result: '30 Mins',
      },
      {
        title: 'Response Time',
        result: '1 Hour 30 Mins',
      },
    ],
  },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

const Body: FC = () => {
  return (
    <div className="body">
      {stats.map((stat, i) => (
        <section key={i} className="body-box flex ">
          <div className="body-left flex-1">
            <div className="body-left-top flex justify-between">
              <div className="flex items-center">
                <h2>{stat.heading}</h2>

                <span>+4.14% </span>
              </div>

              <div className="flex items-center justify-end flex-1">
                <div
                  className="body-dot"
                  style={{ backgroundColor: stat.color }}
                ></div>

                <p>High Priority</p>

                <hr />

                <div className="body-date flex justify-between items-center">
                  <p>This Month</p>

                  <svg className="fill-transparent">
                    <use xlinkHref={`${icon}#icon-box`} />
                  </svg>
                </div>
              </div>
            </div>

            <div className="body-left-bottom">
              <Line
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                      },
                    },
                    y: {
                      grid: {
                        drawBorder: false,
                        drawTicks: false,
                      },
                      min: 10,
                      max: 50,
                      ticks: {
                        stepSize: 10,
                      },
                    },
                  },
                }}
                data={{
                  labels: months,
                  datasets: [
                    {
                      data: [15, 40, 20, 30, 30, 45, 20, 40],
                      borderColor: stat.color,
                      backgroundColor: '#fff',
                      pointRadius: 8,
                      pointHoverRadius: 8,
                      pointBorderColor: stat.color,
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>

          <div className="body-right flex flex-col justify-between">
            {stat.records.map((record, i) => (
              <SmallBox key={i} p={record.title} h={record.result} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Body;
