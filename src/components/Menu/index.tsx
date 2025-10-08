import { Container, MenuItem } from './styles';


interface SidebarProps {
  open: boolean; // controla se o menu está aberto
}

export function Sidebar({ open }: SidebarProps) {
  return (
    <Container open={open}>
      <MenuItem> Início</MenuItem>
      <MenuItem> Produtos</MenuItem>
      <MenuItem>Clientes</MenuItem>
    </Container>
  );
}
