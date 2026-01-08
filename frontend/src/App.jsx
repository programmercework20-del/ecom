import React from 'react';
import Routing from './component/Routing';
import ScrollToTop from './component/ScrollToTop';
import WhatsAppButton from './component/WhatsAppButton';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routing />
      <WhatsAppButton />
    </div>
  );
}

export default App;
