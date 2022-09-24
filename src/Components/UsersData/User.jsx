import { useParams } from "react-router-dom";

// import {withRouter} from 'react-router-dom'

function User() {
    const params = useParams();
    const {name} = params
    console.warn(name);
    return (
    <div>
        These is {name} Section
    </div>
  )
}

export default User;
