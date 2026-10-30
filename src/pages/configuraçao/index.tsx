import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {
  Container, Title, Section, SectionTitle,
  Input, Label, Button
} from '../perfil/styles';

export default function Configuraçao() {
    const {token} = useAuth();
    const {darkMode,toggleDarkMode} = useTheme();
    const navigate = useNavigate();


    const [senhaAtual,setSenhaAtual] = useState('');
    const [novaSenha,setNovaSenha] = useState('');
    const [confirmarSenha,setConfirmarSenha] = useState('');
    const [erroSenha,setErroSenha] = useState('');
    const [senhaAtualizada,setSenhaAtualizada] = useState('false');

    async function atualizarSenha() {
      setErroSenha('');
      if(novaSenha!== confirmarSenha){
        setErroSenha('As senhas não coincidem!');
        return;
      }
      if(novaSenha.length<6){
        setErroSenha('A senha deve ter pelo menos 6 caracteres!');
        return;
      }

      try{
        const response = await fetch ('http://localhost:3001/clientes/senha', {
           method: 'PUT',
           headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ senhaAtual, novaSenha }),
        });

        const data = await response.json();
        if(!reponse.ok) {
          setErroSenha(data.message);
          return;
        }
        setSenhaAtualizada(true);
        setSenhaAtual('');
        setNovaSenha('');
        setConfirmarSenha('');
        setTimeout(() => setSenhaAtualizada(false),3000);
      }
   }

   return (
    <Container>
      
    </Container>
   )
}