import {tashToExcel} from '../../../../scripts/tableToExcel'


function Tash(props) {
    return (<div>
        <h2>ת"ש</h2>
        <button onClick={()=>tashToExcel(props.chosen)}>click</button>
    </div>)
}

export default Tash