// Import React
import React from 'react';

// Import the BrowserRouter, Route, Link components from 'react-router-dom library
import { BrowserRouter, Route } from 'react-router-dom';

// Import Header Component
import Header from './Header';

// Import Landing Page
import Landing from './pages/Landing';

// Import Contact page
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;