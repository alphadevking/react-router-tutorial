import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {

  const navigate = useNavigate();
  
  return (
    <>
        Order Received
        <>
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
    </>
  )
}
