import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BtnCTA({ className, children }) {
  return (
    <Link
      to="/dashboard/expenses"
      className={`px-8 py-2 text-white bg-[#7434db] rounded-lg hover:bg-[#7434db]/50 transition ease-in-out duration-150 ${className}`}
    >
      {children}
    </Link>
  );
}

BtnCTA.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BtnCTA.defaultProps = {
  className: "",
};

export default BtnCTA;
