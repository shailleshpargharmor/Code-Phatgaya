import {withRouter} from 'react-router-dom'

function User(prop) {
    console.warn(prop);
    return (
    <div>
        These is User Data Section
    </div>
  )
}

export default withRouter(User);
