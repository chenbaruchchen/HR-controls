import React from 'react'

import PropTypes from 'prop-types'

import './q-on-top.css'

const QOnTop = (props) => {
  return (
    <div className="q-on-top-q-on-top">
      <div className="q-on-top-container">
        <svg onClick={()=>props.setOpen(false)} viewBox="0 0 1024 1024" className="q-on-top-icon">
          <path d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path>
        </svg>
        <span className="q-on-top-text">{props.q}</span>
        <div className="q-on-top-container1">
          <input
          onChange={(e)=>props.changeInput('details',e.target.value)}
            type="text"
            placeholder={'פירוט'}
            className="q-on-top-textinput input"
            value={props.details}
          />
          <span className="q-on-top-text1">{props.details}</span>
        </div>
        <div className="q-on-top-container2">
          <input
                     onChange={(e)=>props.changeInput('found',e.target.value)}

            type="text"
            value={props.found}
            placeholder={'ממצאים'}
            className="q-on-top-textinput1 input"
          />
          <span className="q-on-top-text2">{props.found}</span>
        </div>
      </div>

      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  )
}

QOnTop.defaultProps = {
  text11:
    'atlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsd',
  textinput_placeholder: 'placeholder',
  text1:
    'atlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsd',
  text: 'atlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsdatlv dsd',
  textinput_placeholder2: 'placeholder',
}

QOnTop.propTypes = {
  text11: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
}

export default QOnTop
