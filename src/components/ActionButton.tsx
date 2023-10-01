import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

interface ActionButtonProps {
  productId: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ productId }) => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="outlined" 
      color="primary" 
      onClick={() => navigate(`/products/${productId}`)}>
      View
    </Button>
  );
};

export default ActionButton;
