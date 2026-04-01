import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Curriculum Vitae Builder</h1>
        <p>Build and manage your professional CV</p>
      </header>

      <main className="app-main">
        <GeneralInfo />
        <Education />
        <Experience />
      </main>

      <footer className="app-footer">
        <p>&copy; Anson Chan 2026 CV Builder. Built with React for The Odin Project.</p>
      </footer>
    </div>
  );
}

export default App;
