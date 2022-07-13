import React from 'react';
import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/saga-blue/theme.css";  //theme
import 'primeicons/primeicons.css';

import { GiftExpertApp } from './GifExpertApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>
)
