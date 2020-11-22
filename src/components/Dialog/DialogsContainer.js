import {addMessage} from "../../redux-store/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    //messageText: state.dialogsPage.messageText,
    dialogs: state.dialogsPage.dialogs
});

export default compose(
    connect (mapStateToProps, {addMessage}),
    //withAuthRedirect
)(Dialogs)