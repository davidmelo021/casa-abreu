import { useNavigate } from 'react-router-dom';
import { Container, MenuItem } from './styles';



interface SidebarProps {
  open: boolean; 
}

export function Sidebar({ open }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <Container open={open}>
      <MenuItem onClick={() => navigate('/')}> Início</MenuItem>
      <MenuItem onClick={()=>navigate('/products')}> Produtos</MenuItem>
      <MenuItem onClick={()=>navigate('/clientes')}>Clientes</MenuItem>
    </Container>
  );
}
