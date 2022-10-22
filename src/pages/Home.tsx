import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();

    return(
        <>
            Home
            <>
                {/* Replace: true is used to return our tab window two places back, unlike the back button specified in our order-summary page. */}
                <div>
                    <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button>
                </div>
            </>
        </>
    )
}