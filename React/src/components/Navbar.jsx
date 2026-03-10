import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">{props.WebsiteName}</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        
          

        <li>
          <Link to="/about" className="hover:text-red-400">
            About
          </Link>
        </li>

        <li>
          <Link to="/blog" className="hover:text-green-400">
            Blog
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
