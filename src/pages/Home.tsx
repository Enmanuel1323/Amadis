import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle></IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <div className="profile">
        <img src="/assets/itla.jpg" alt="Foto 2x2" className="profile-pic" />
        <h2>Juan Enmanuel Lopez Aramboles</h2>
        <p>20211990@itla.edu.do</p>
      </div>
      <IonList>
        <IonItem>
          <Link to="/sumadora">Sumadora</Link>
        </IonItem>
        <IonItem>
          <Link to="/traductor">Traductor de Números</Link>
        </IonItem>
        <IonItem>
          <Link to="/tabla">Tabla de Multiplicar</Link>
        </IonItem>
        <IonItem>
          <Link to="/experiencia">Experiencia Personal</Link>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Home;
