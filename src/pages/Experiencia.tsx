import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Experiencia: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Mi Experiencia</h2>
        <p>
          A continuación, comparto un video que resume mi experiencia personal:
        </p>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/juq_OQek3KE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video de Experiencia Personal"
          ></iframe>
        </div>
        <IonButton expand="full" color="secondary" onClick={handleBack} className="ion-margin-top">
          Volver a la Página Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;