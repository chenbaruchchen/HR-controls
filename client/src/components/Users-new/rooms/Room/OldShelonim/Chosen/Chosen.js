import Tash from './Tash'
export default function Chosen(props) {


    return<div>

        {props.chosen.meta.type==='tash'&&<Tash chosen={props.chosen}/>}
        
    </div>
}
