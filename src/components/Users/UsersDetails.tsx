// For us to be able to extract and use the user id, we import a hook from react-router-dom called useParams
import { useParams } from "react-router-dom"

export const UsersDetails = () => {

    // const params = useParams();

    // const userId = params.userId;

    // We can also destructure params and get rid of the two upper lines
    const { userId } = useParams();

    return (
        <>
            <div>Details about User {userId}.</div>
        </>
    )
}
