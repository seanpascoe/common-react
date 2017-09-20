import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SelectFieldGroup = ({label, editMode, onChange, value, field, error, autoFocus, options, formNoValidate, containerClass, disabled, loading}) => {
  return (
    <div className={classnames("form-input-group select-container", {'container-edit-mode': editMode, [containerClass]: containerClass})}>
      <label htmlFor={field} className={classnames('form-label', {'error': error})}>{label}</label>
      <select disabled={disabled} value={value || ''} onChange={onChange} className={classnames('form-input', {'invalid': error, 'edit-mode': editMode})} name={field} id={field}>
        <option disabled value="">{loading ? 'Loading...' : `Select ${label}...`}</option>
        { options.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
      </select>
      { error && <span className="input-error-msg">{error}</span> }
    </div>
  )
}

SelectFieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  field: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
  autoFocus: PropTypes.bool
}

SelectFieldGroup.defaultProps = {
  autoFocus: false
}

export default SelectFieldGroup;
