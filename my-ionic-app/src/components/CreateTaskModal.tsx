import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonModal,
  IonSearchbar,
} from '@ionic/react';
import styled from 'styled-components';
import { Capacitor } from '@capacitor/core';

const StyledModal = styled(IonModal)`
  --ion-background-color: #090B22;
  --ion-text-color: #ffffff;
`;

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (taskName: string, blockedApps: string[], blockedWebsites: string[]) => void;
}

interface AppInfo {
  name: string;
  packageName: string;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ isOpen, onClose, onCreateTask }) => {
  const [taskName, setTaskName] = useState('');
  const [installedApps, setInstalledApps] = useState<AppInfo[]>([]);
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [blockedWebsites, setBlockedWebsites] = useState<string[]>([]);
  const [showAppList, setShowAppList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getInstalledApps = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          // This is a placeholder. You'll need to implement the actual native code to get installed apps.
          const result = await Capacitor.Plugins.InstalledApps.getInstalledApps();
          setInstalledApps(result.apps);
        } catch (error) {
          console.error('Error fetching installed apps:', error);
          // Fallback to dummy data
          setInstalledApps([
            { name: 'Facebook', packageName: 'com.facebook.katana' },
            { name: 'Instagram', packageName: 'com.instagram.android' },
            { name: 'Twitter', packageName: 'com.twitter.android' },
            { name: 'TikTok', packageName: 'com.zhiliaoapp.musically' },
            { name: 'YouTube', packageName: 'com.google.android.youtube' },
          ]);
        }
      } else {
        // Fallback for web
        setInstalledApps([
          { name: 'Facebook', packageName: 'com.facebook.katana' },
          { name: 'Instagram', packageName: 'com.instagram.android' },
          { name: 'Twitter', packageName: 'com.twitter.android' },
          { name: 'TikTok', packageName: 'com.zhiliaoapp.musically' },
          { name: 'YouTube', packageName: 'com.google.android.youtube' },
        ]);
      }
    };
    getInstalledApps();
  }, []);

  const handleCreateTask = () => {
    onCreateTask(taskName, selectedApps, blockedWebsites);
    setTaskName('');
    setSelectedApps([]);
    setBlockedWebsites([]);
    onClose();
  };

  const toggleAppSelection = (appName: string) => {
    setSelectedApps(prev => 
      prev.includes(appName) ? prev.filter(a => a !== appName) : [...prev, appName]
    );
  };

  const filteredApps = installedApps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create New Task</IonTitle>
          <IonButton onClick={onClose} slot="end" fill="clear">
            Close
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInput 
          placeholder="Task Name" 
          value={taskName} 
          onIonChange={e => setTaskName(e.detail.value!)} 
        />
        
        <IonButton expand="block" onClick={() => setShowAppList(!showAppList)}>
          {showAppList ? 'Hide App List' : 'Show App List to Block'}
        </IonButton>
        
        {showAppList && (
          <>
            <IonSearchbar
              value={searchQuery}
              onIonChange={e => setSearchQuery(e.detail.value!)}
              placeholder="Search apps"
            />
            <IonList>
              {filteredApps.map(app => (
                <IonItem key={app.packageName}>
                  <IonLabel>{app.name}</IonLabel>
                  <IonToggle 
                    checked={selectedApps.includes(app.name)} 
                    onIonChange={() => toggleAppSelection(app.name)} 
                  />
                </IonItem>
              ))}
            </IonList>
          </>
        )}
        
        <IonInput 
          placeholder="Websites to block (comma-separated)" 
          value={blockedWebsites.join(', ')} 
          onIonChange={e => setBlockedWebsites(e.detail.value!.split(',').map(s => s.trim()))} 
        />
        
        <IonButton expand="block" onClick={handleCreateTask}>Create Task</IonButton>
      </IonContent>
    </StyledModal>
  );
};

export default CreateTaskModal;