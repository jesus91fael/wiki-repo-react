
import { useState } from 'react';
import Input from './Components/Input';
import Button from './Components/Button';
import ItemRepo from './Components/ItemRepo';
import { api } from './services/api';

import { Container } from './styles';

const App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data){

      const isExist = repos.find(repo => repo.id === data.id);
      setCurrentRepo('');
      
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }

console.log('repo', repos)
  return (
    <Container>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repos}/>)}
    </Container>
  );
}

export default App;