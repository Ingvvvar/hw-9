import React from 'react';
import './App.css';
import Counter from './components/Counter/Сounter';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  const refreshPage = () => window.history.go(0)
  const el = (
    <div className="App">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <hr />
      <button onClick={refreshPage}>
        Refresh Page
    </button>
    </div>
  )
  return (
    el
  );
}

export default App;
