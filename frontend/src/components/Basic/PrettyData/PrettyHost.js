import './PrettyHost.css';
const { NavLink } = require("react-router-dom");


const PrettyHost = ({ host }) => {

    return (
        <div className="pretty-host">
            <h6 className='pretty-hosted-by'>Hosted By</h6>
            <NavLink className='pretty-host-name' to={`/companies/${host.id}`}>
               {host.name}
            </NavLink>
        </div>
    )
}

export default PrettyHost
