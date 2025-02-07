import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [texto, setTexto] = useState<string>('');
  const history = useHistory();

  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  const convertir = (num: number): string => {
    if (num === 0) return 'cero';
    if (num > 1000) return 'Número fuera de rango';

    let letras = '';

    if (num === 1000) return 'mil';

    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;

    if (c > 0) {
      letras += centenas[c] + ' ';
    }

    if (d === 1 && u < 6) {
      letras += especiales[u];
    } else {
      if (d > 0) {
        letras += decenas[d];
        if (u > 0) {
          letras += ' y ' + unidades[u];
        }
      } else if (u > 0) {
        letras += unidades[u];
      }
    }

    return letras.trim();
  };

  const handleTraducir = () => {
    if (numero !== undefined && numero >= 0 && numero <= 1000) {
      setTexto(convertir(numero));
    } else {
      setTexto('Por favor, ingrese un número entre 0 y 1000.');
    }
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor de Números a Letras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número</IonLabel>
          <IonInput type="number" value={numero} onIonChange={e => setNumero(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonButton expand="full" onClick={handleTraducir} className="ion-margin-top">
          Traducir
        </IonButton>
        {texto && (
          <IonItem className="ion-margin-top">
            <IonLabel>Resultado: {texto}</IonLabel>
          </IonItem>
        )}
        <IonButton expand="full" color="secondary" onClick={handleBack} className="ion-margin-top">
          Volver a la Página Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Traductor;
