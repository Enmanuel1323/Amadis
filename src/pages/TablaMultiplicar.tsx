import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [tabla, setTabla] = useState<number[]>([]);
  const history = useHistory();

  const generarTabla = (num: number) => {
    const resultados = [];
    for (let i = 1; i <= 13; i++) { 
      resultados.push(num * i);
    }
    setTabla(resultados);
  };

  const handleGenerar = () => {
    if (numero !== undefined) {
      generarTabla(numero);
    }
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Ingrese un número</IonLabel>
          <IonInput type="number" value={numero} onIonChange={e => setNumero(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonButton expand="full" onClick={handleGenerar} className="ion-margin-top">
          Generar Tabla
        </IonButton>
        {tabla.length > 0 && (
          <IonList className="ion-margin-top">
            {tabla.map((resultado, index) => (
              <IonItem key={index}>
                <IonLabel>
                  {numero} x {index + 1} = {resultado}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
        <IonButton expand="full" color="secondary" onClick={handleBack} className="ion-margin-top">
          Volver a la Página Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TablaMultiplicar;