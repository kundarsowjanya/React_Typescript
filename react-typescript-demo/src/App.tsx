
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';

function App() {
  const personName={
    first:"Bruce",
    last:"Wayne"
  }

  const nameList=[
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:"Clark",
      last:"Kent"
    },
    {
      first:"Princes",
      last:"Diana"
    }
  ]
  return (
    <div className="App">
     
    
    </div>
  );
}

export default App;
