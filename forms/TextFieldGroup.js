import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({label, onChange, value, field, error, type, autoFocus, placeholder, formNoValidate, disabled, inputClass, noLabel}) => {
  return (
    <div className="form-input-group">
      { !noLabel && <label htmlFor={field} className={classnames('form-label', {'error': error})}>{label}</label> }
      <input disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} className={classnames({'form-input': !inputClass,'invalid': error, [inputClass]: inputClass})} name={field} id={field} type={type} autoFocus={autoFocus} />
      { error && <span className="input-error-msg">{error}</span> }
    </div>
  )
}

TextFieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool
}

TextFieldGroup.defaultProps = {
  type: 'text',
  autoFocus: false
}

export default TextFieldGroup;
