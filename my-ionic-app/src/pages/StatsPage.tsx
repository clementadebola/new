import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const StatsPage = () => {
  const [stats, setStats] = useState({
    activity: {
      task: 'Developing new feature',
      progress: 0.7,
    },
    weeklyActivity: [
      { date: 'Mon', usage: 120 },
      { date: 'Tue', usage: 150 },
      { date: 'Wed', usage: 180 },
      { date: 'Thu', usage: 200 },
      { date: 'Fri', usage: 220 },
      { date: 'Sat', usage: 180 },
      { date: 'Sun', usage: 160 },
    ],
  });

  useEffect(() => {
    // Fetch stats data from an API or generate random data
    const fetchStats = async () => {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12" sizeMd="6" sizeLg="4">
          <ActivityCard>
            <IonCardHeader>Current Activity</IonCardHeader>
            <IonCardContent>
              <ActivityProgress>
                <CircularProgressbarStyled
                  value={stats.activity.progress * 100}
                  text={`${Math.round(stats.activity.progress * 100)}%`}
                  styles={buildStyles({
                    pathColor: '#82ca9d',
                    textColor: '#ffffff',
                    trailColor: '#2c2c2e',
                    strokeLinecap: 'round',
                    strokeWidth: 8,
                    fontSize: '1.5rem',
                  })}
                />
              </ActivityProgress>
              <ActivityTitle>{stats.activity.task}</ActivityTitle>
            </IonCardContent>
          </ActivityCard>
        </IonCol>
        <IonCol size="12" sizeMd="6" sizeLg="8">
          <WeeklyActivityCard>
            <IonCardHeader>Weekly Activity</IonCardHeader>
            <IonCardContentStyled>
              <WeeklyActivityChartContainer>
                <ResponsiveContainer>
                  <BarChartStyled data={stats.weeklyActivity}>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usage" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                  </BarChartStyled>
                </ResponsiveContainer>
              </WeeklyActivityChartContainer>
            </IonCardContentStyled>
          </WeeklyActivityCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default StatsPage;

const ActivityCard = styled(IonCard)`
  background-color: #2c2c2e;
  color: #ffffff;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ActivityProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CircularProgressbarStyled = styled(CircularProgressbar)`
  width: 80px;
  height: 80px;
`;

const ActivityTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
`;

const WeeklyActivityCard = styled(IonCard)`
  background-color: #2c2c2e;
  color: #ffffff;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const WeeklyActivityChartContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IonCardContentStyled = styled(IonCardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BarChartStyled = styled(BarChart)`
  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-bar-rectangle {
    border-radius: 10px 10px 0 0;
  }
`;