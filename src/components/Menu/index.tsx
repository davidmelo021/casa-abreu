import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';
import { Container, MenuItem } from './styles';



interface SidebarProps {
  open: boolean; 
}

export function Sidebar({ open }: SidebarProps) {
  const navigate = useNavigate();
  const {isLogado, logout} = useAuth();
  return (
    <Container open={open}>
      <MenuItem onClick={() => navigate('/')}> Início</MenuItem>
      <MenuItem onClick={()=>navigate('/products')}> Produtos</MenuItem>
      {isLogado && (
        <MenuItem onClick={()=>navigate('/clientes')}>Clientes</MenuItem>
      )}
      {isLogado && (
         <MenuItem onClick={logout} style={{ color: '#ff6600' }}>Sair</MenuItem>
      )}

      {isLogado && (
  <MenuItem onClick={() => navigate('/perfil')}>Perfil</MenuItem>
)}
    </Container>
  );
}
