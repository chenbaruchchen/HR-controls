import Tash from './Tash'

import Sadir from './Sadir'
import Soldiers from './Soldiers'



import React from 'react'

import PropTypes from 'prop-types'

import './chosen.css'

import ChosenHeader from './chosen-header/chosen-header'

const Chosen = (props) => {
  return (
    <div className="chosen-chosen">
{console.log(props.chosen)}
{props.chosen.meta.type==='tash'&&<Tash chosen={props.chosen}/>}
{props.chosen.meta.type==='sadir'&&<Sadir chosen={props.chosen}/>}
{props.chosen.meta.type==='soldiers'&&<Soldiers chosen={props.chosen}/>}
      <ChosenHeader chosen={props.chosen}/>

      <div className="chosen-body">
        <h1 className="chosen-text6">{`שאלון ${props.chosen.meta?.subType} `}</h1>
      </div>
    </div>
  )
}

Chosen.defaultProps = {
  heading: 'שאלון',
}

Chosen.propTypes = {
  heading: PropTypes.string,
}

export default Chosen
