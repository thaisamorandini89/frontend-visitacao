import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {

  const [visitors, setVisitors] = useState([])

  const newVisitor = (visitor) => {
    console.log(visitor)
    setVisitors([...visitors, visitor])
  }

  return (
    <div className="App">
      <Banner />
      <Form registerVisitors={visitor => newVisitor(visitor)}/>
      <Footer />
    </div>
  );
}

export default App;
