import React from 'react';
import { Area, AreaChart } from 'recharts';

import styles from './styles.module.scss';

type Props = {
  color: string;
  trend: 'UP' | 'DOWN';
};

const TREND = {
  UP: [
    { name: 'hello', uv: 100 },
    { name: 'hello', uv: 50 },
    { name: 'hello', uv: 120 },
    { name: 'hello', uv: 100 },
    { name: 'hello', uv: 140 },
  ],
};

const SummaryItem: React.FC<Props> = ({ trend = 'UP' }) => {
  return (
    <div className={`rowy ${styles.container}`}>
      <AreaChart width={100} height={50} data={TREND.UP} style={{}}>
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#8884d8'
          strokeWidth={2}
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
      <div className={styles.infoContainer}>
        <div className='lightLabel'>INCOME</div>
        <div id={styles.amountTxt}>$21M</div>
      </div>
    </div>
  );
};

export default SummaryItem;
