import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div className="pl-24 w-4/6">
    <div className="h-24 py-9 flex justify-between">
      <div className="flex justify-start">
        <p className="text-3xl font-bold">Inbox</p>
      </div>
      <div className="w-2/3">
        <div className="flex text-2xl justify-evenly">
          <div>
            <Link to="/" className="mx-3 font-semibold">
              Home
            </Link>
            <div className="h-1 w-5 rounded-full mx-auto bg-blue-500 mt-3" />
          </div>
          <Link className="mx-3 text-gray-500" to="/company">
            Company
          </Link>
          <Link to="/pricing" className="mx-3 text-gray-500">
            Pricing
          </Link>
          <Link to="/contact" className="mx-3 text-gray-500">
            Contact
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
