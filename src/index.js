import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename="/goit-react-hw-05-movies" - необхідно для збиральника проєкту */}
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Компонент <Route> завжди щось рендерить. Те, що зазначено у пропсі element якщо його path збігається з поточним значенням сегмента pathname в адресному рядку браузера, або null, якщо не збігається.
