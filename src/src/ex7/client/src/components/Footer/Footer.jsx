
import "./Footer.css"
import PropTypes from 'prop-types';
const Footer = ({numOfTasks,clearAllItemsAction})=>{
    const hadaleClearAll = async () =>{
        await clearAllItemsAction();
    }
   

    return (
        <footer>
           {numOfTasks>0 && <p  className="count"> You Have: {numOfTasks} Panding Tasks </p>}
            <button onClick={hadaleClearAll} className="clearAllBtn">Clear 🆑</button>
          </footer>
    )
}
Footer.propTypes={
    numOfTasks:PropTypes.number,
    clearAllItemsAction:PropTypes.func

}


export default Footer