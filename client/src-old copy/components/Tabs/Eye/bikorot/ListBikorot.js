import './chose-shelon.css'
export default function ListBikorot(props) {
  let list=props.rooms.map(room=>
<div key={room._id}  onClick={()=>props.setChosenBikoret(room)} className="chose-shelon-item">
          <h1>{room.name}</h1>
        </div>
  )
    return(


        <div className="chose-shelon-list">
        {list}
      </div>
    )
}