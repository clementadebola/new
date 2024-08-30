import React, { useState, useEffect } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonContent,
  IonApp,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

interface WeeklyActivity {
  date: string;
  usage: number;
}

interface AppUsage {
  app: string;
  usage: string;
}

interface StatsData {
  weeklyActivity: WeeklyActivity[];
  appUsage: AppUsage[];
}

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<StatsData>({
    weeklyActivity: [
      { date: "Mon", usage: 50 },
      { date: "Tue", usage: 150 },
      { date: "Wed", usage: 100 },
      { date: "Thu", usage: 200 },
      { date: "Fri", usage: 80 },
      { date: "Sat", usage: 180 },
      { date: "Sun", usage: 130 },
    ],
    appUsage: [
      { app: "TikTok", usage: "6h 7m" },
      { app: "YouTube", usage: "1h 51m" },
      { app: "WhatsApp Business", usage: "1h 43m" },
    ],
  });

  const [selectedView, setSelectedView] = useState<"WEEK" | "USAGE TIME">("WEEK");
  const [previousWeek, setPreviousWeek] = useState<StatsData | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch("/api/stats");
      const data: StatsData = await response.json();
      setStats(data);

      const prevWeekData: StatsData = {
        weeklyActivity: data.weeklyActivity.map((_, index) => ({
          date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
          usage: Math.floor(Math.random() * 200),
        })),
        appUsage: data.appUsage,
      };
      setPreviousWeek(prevWeekData);
    };
    fetchStats();
  }, []);

  const handleViewChange = (view: "WEEK" | "USAGE TIME") => {
    setSelectedView(view);
  };

  const calculateAverageUsage = (data: WeeklyActivity[]) => {
    const totalMinutes = data.reduce((total, day) => total + day.usage, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <IonApp>
      <StyledPage>
        <Header>
          <IonToolbar>
            <IonTitle>Statistics</IonTitle>
          </IonToolbar>
        </Header>

        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <WeeklyActivityCard>
                  <IonCardHeader>
                    <ViewSelectorContainer>
                      <IonButton
                        onClick={() => handleViewChange("WEEK")}
                        className={selectedView === "WEEK" ? "active" : ""}
                      >
                        WEEK
                      </IonButton>
                      <IonButton
                        onClick={() => handleViewChange("USAGE TIME")}
                        className={selectedView === "USAGE TIME" ? "active" : ""}
                      >
                        USAGE TIME
                      </IonButton>
                    </ViewSelectorContainer>
                  </IonCardHeader>
                  <IonCardContentStyled>
                    <WeeklyActivityChartContainer>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChartStyled
                          data={
                            selectedView === "WEEK"
                              ? stats.weeklyActivity
                              : previousWeek?.weeklyActivity || []
                          }
                        >
                          <XAxis dataKey="date" />
                          <YAxis domain={[0, "dataMax"]} />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Bar dataKey="usage" fill="#8F46AC" radius={[10, 10, 0, 0]} />
                        </BarChartStyled>
                      </ResponsiveContainer>
                    </WeeklyActivityChartContainer>
                    <DailyAverageContainer>
                      <DailyAverageText>Daily avg</DailyAverageText>
                      <DailyAverageValue>
                        {calculateAverageUsage(
                          selectedView === "WEEK"
                            ? stats.weeklyActivity
                            : previousWeek?.weeklyActivity || []
                        )}
                      </DailyAverageValue>
                    </DailyAverageContainer>
                  </IonCardContentStyled>
                </WeeklyActivityCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <AppUsageCard>
                  <IonCardHeader>App Usage</IonCardHeader>
                  <IonCardContentStyled>
                    {stats.appUsage.map((app, index) => (
                      <AppUsageItem key={index}>
                        <AppIcon>{app.app[0]}</AppIcon>
                        <AppName>{app.app}</AppName>
                        <AppUsage>{app.usage}</AppUsage>
                      </AppUsageItem>
                    ))}
                    <BuyPremiumButton>Buy premium to see 102 more</BuyPremiumButton>
                  </IonCardContentStyled>
                </AppUsageCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </StyledPage>
    </IonApp>
  );
};

export default StatsPage;

const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090b22;
    --color: #ffffff;
  }
`;

const WeeklyActivityCard = styled(IonCard)`
  background-color: #1c1c1e;
  color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 600px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ViewSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: #ffffff;
    background-color: #2c2c2e;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;

    &.active {
      background-color: #8f46ac;
    }
  }
`;

const WeeklyActivityChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const IonCardContentStyled = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
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

const AppUsageCard = styled(IonCard)`
  background-color: #2c2c2e;
  color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AppUsageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const AppIcon = styled.div`
  background-color: #8f46ac;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const AppName = styled.div`
  font-size: 16px;
`;

const AppUsage = styled.div`
  font-size: 16px;
`;

const DailyAverageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const DailyAverageText = styled.div`
  font-size: 16px;
  margin-right: 8px;
`;

const DailyAverageValue = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const BuyPremiumButton = styled.div`
  background-color: #8f46ac;
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
`;
