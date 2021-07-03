import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
import "../style/profile.css";

export default function Profile() {
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <>
      <div className="profile">
        <h1>This is profile page </h1>

        <div className="profileLink">
          <Link to={`${url}/viewProfile`} style={{ textDecoration: "none" }}>
            <button>View Profile</button>
          </Link>
          <Link to={`${url}/editProfile`} style={{ textDecoration: "none" }}>
            <button>Edit Profile</button>
          </Link>
        </div>

        <Switch>
          <Route path={`${path}/viewProfile`} component={ViewProfile} />
          <Route path={`${path}/editProfile`} component={EditProfile} />
        </Switch>
      </div>
    </>
  );
}
