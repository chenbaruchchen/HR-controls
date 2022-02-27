
export default function Shelon(props) {return(

<div style={{width:'87vw'}}>
<Back onClick={()=>props.setChosen(null)}/>
{props.shelon}
</div>
) }
    

 

const Back = (props) => {
  return (
    <div onClick={()=>props.onClick()}
      style={{
        display: 'flex',
        position: 'relative',
        top: '150px',
        marginLeft:'100px',
        marginRight:'auto'
        
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        style={{
          width: '45px',
          height: '45px',
          borderColor: '#464343',
          borderWidth: '1px',
          borderRadius: '50px',
          fill: '#464343',
          boxShadow: '2px 2px 10px 2px #c7c2c2',
        }}
      >
        <path d="M512 386.517v-109.184c0-10.923-4.181-21.845-12.501-30.208-8.32-8.32-19.243-12.459-30.165-12.459s-21.845 4.139-30.165 12.459l-268.501 264.875 268.501 264.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501 12.501-19.285 12.501-30.165v-106.197c117.333 2.901 245.547 24.149 341.333 170.197v-42.667c0-197.675-149.333-360.235-341.333-381.483z"></path>
      </svg>
    </div>
  )
}

 