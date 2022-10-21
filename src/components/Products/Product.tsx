import { Link, Outlet } from "react-router-dom"


export const Product = () => {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products' />
        </div>
        <nav>
            {/* Even with all the nested links, product won't know where to output our links, so we add the outlet tag from our react-router-dom */}
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet/>
    </>
  )
}
