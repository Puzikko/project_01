import Navbar from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;