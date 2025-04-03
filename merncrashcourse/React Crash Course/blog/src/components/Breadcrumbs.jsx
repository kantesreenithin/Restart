import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const loaction = useLocation();
  let currentLink = "";
  let crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  currentLink = crumbs.join(".");
  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
