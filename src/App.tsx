import React from 'react';
import { IonApp, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import TablaMultiplicar from './pages/TablaMultiplicar';
import Experiencia from './pages/Experiencia';
import '@ionic/react/css/core.css';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/">Página Inicial</IonItem>
            <IonItem button routerLink="/sumadora">Sumadora</IonItem>
            <IonItem button routerLink="/traductor">Traductor de Números</IonItem>
            <IonItem button routerLink="/tabla">Tabla de Multiplicar</IonItem>
            <IonItem button routerLink="/experiencia">Experiencia Personal</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonRouterOutlet>
          <Route path="/" exact component={Home} />
          <Route path="/sumadora" component={Sumadora} />
          <Route path="/traductor" component={Traductor} />
          <Route path="/tabla" component={TablaMultiplicar} />
          <Route path="/experiencia" component={Experiencia} />
        </IonRouterOutlet>
      </IonPage>
    </Router>
  </IonApp>
);

export default App;
