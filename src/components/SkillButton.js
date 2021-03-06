import React from 'react';
import './SkillButton.css';
const SkillButton = (props) => {
  return (
    <label className={props.selected && 'selected'}>
      <input
        className='SkillButton'
        name='skill'
        type='radio'
        value={props.value}
        onClick={props.handler}
        checked={props.selected}
        onChange={props.handler}
      ></input>
      {props.value.toUpperCase()}
    </label>
  );
};

export default SkillButton;
