import './close-console.styles.scss'
import { connect } from 'react-redux';
import { closeSidebarConsole } from '../../redux/sidebar-console/sidebar-console.actions';



const CloseConsole = (props) => {

    const {closeSidebarConsole} = props 
    
    const onHandleClick = () => {
        closeSidebarConsole()
      }

    return(
        <div className='close-console' onClick={onHandleClick}>&#215; {console.log(props, 'butn props')}</div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    closeSidebarConsole: () => dispatch(closeSidebarConsole())
})

export default connect(null, mapDispatchToProps)(CloseConsole);