// To work on our search params, we use the useSearchParams hook from react-router-dom
import { Outlet, Link, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Now we create a check for the active users. We would create a boolean function, if the search param is active, boolean function evaluates to true, and otherwise, boolean function evaluates to false.
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      {/* Outlet component is used to output nested routes */}
      <Outlet />

      <div>
        <Link to='1'>User 1</Link>
      </div>

      <div>
        <Link to='2'>User 2</Link>
      </div>

      <div>
        <Link to='3'>User 3</Link>
      </div>

      <Link to='admin'>Admin Page</Link>

      <div>
        {/* Clicking the Active Users button will render ( users?filter=active ) ,while clicking the Reset button will disable the search parameters set with the first button. */}
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      <div>
        {/* Show active users when search param is active, if not, show all users */}
        {showActiveUsers ? <>Showing Active Users</> : <>Showing All Users</>}
      </div>
    </>
  );
};
