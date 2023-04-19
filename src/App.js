import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import { notification } from 'antd';
import { makeRequest } from './services/api';

function App() {

  const [visitors, setVisitors] = useState([])
  
  useEffect(() => {

    const data = '' 
    const params = ''
       
    makeRequest({ url: '/visitors/1', data, params })
    .then(response => console.log(response.data))

  }, []);

  const newVisitor = (visitor) => {
    setVisitors([...visitors, visitor])

    const params = ''    
    makeRequest({ method:'POST', url: '/visitors', data: visitor, params })
    .then(response => 
    notification.success({
      message: 'Sucesso',
      description:'Registro salvo com sucesso.',
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form registerVisitors={visitor => newVisitor(visitor)} />
      <Footer />
    </div>
  );
}

export default App;
