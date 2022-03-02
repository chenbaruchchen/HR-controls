import Tash from './Tash'




import React from 'react'

import PropTypes from 'prop-types'

import './chosen.css'

import ChosenHeader from './chosen-header/chosen-header'

const Chosen = (props) => {
  return (
    <div className="chosen-chosen">

{props.chosen.meta.type==='tash'&&<Tash chosen={props.chosen}/>}

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
