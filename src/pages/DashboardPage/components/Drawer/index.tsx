import React from 'react';
import {
  BarChart2,
  Home,
  PieChart,
  TrendingUp,
  UploadCloud,
} from 'react-feather';
import DrawerListItem from './components/DrawerListItem';

type Props = {};

const DrawerItem: { label: string; icon?: any }[] = [
  { label: 'Dashboard', icon: <Home /> },
  { label: 'Graphical', icon: <TrendingUp /> },
  { label: 'Cloud Store', icon: <UploadCloud /> },
  { label: 'Analysis', icon: <PieChart /> },
];

const DashboardDrawer: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        height: '100%',
        // alignItems: 'center',
      }}
    >
      <h3 style={{ padding: '2em 0px 4em 0px', alignSelf: 'center' }}>
        Berapa Lui
      </h3>
      <div style={{ padding: '0 2.5em 0 2.5em' }}>
        {DrawerItem.map((item, index) => (
          <DrawerListItem
            key={`${item.label.toLocaleLowerCase()}-${index}`}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardDrawer;
