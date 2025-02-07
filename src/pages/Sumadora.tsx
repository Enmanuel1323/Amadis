// Archivo: src/pages/Sumadora.tsx

import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();
  const [resultado, setResultado] = useState<number>();
  const history = useHistory();

  const handleSumar = () => {
    if (num1 !== undefined && num2 !== undefined) {
      setResultado(num1 + num2);
    }
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número 1</IonLabel>
          <IonInput type="number" value={num1} onIonChange={e => setNum1(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Número 2</IonLabel>
          <IonInput type="number" value={num2} onIonChange={e => setNum2(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonButton expand="full" onClick={handleSumar} className="ion-margin-top">
          Sumar
        </IonButton>
        {resultado !== undefined && (
          <IonItem className="ion-margin-top">
            <IonLabel>Resultado: {resultado}</IonLabel>
          </IonItem>
        )}
        <IonButton expand="full" color="secondary" onClick={handleBack} className="ion-margin-top">
          Volver a la Página Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;
