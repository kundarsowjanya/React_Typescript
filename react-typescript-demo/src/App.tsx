
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
     <Status status='loading'/>
     <Oscar>
     <Heading>Placeholder text</Heading>
     </Oscar>
     <Greet name="sowjanya"  isLoggedIn={true}/>
    
    </div>
  );
}

export default App;
