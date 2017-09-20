//would be in external 'validation' folder
import Validator from 'validator'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let errors = {}

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name is required.'
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name is required.'
  }

  if (isEmpty(data.team)) {
    errors.team = 'Team is required.'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required.'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid.'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

/* Below - all within react component */

isValid = (validator) => {
  const { errors, isValid } = validator(this.state)
  !isValid && this.setState({ errors })
  return isValid
}


//example

/* at top of component */
// import validateInput from '../../validation/addEmployee'


createEmployee = (e) => {
  e.preventDefault()
  if (this.isValid(validateInput)) {
    let { firstName, lastName, team, email } = this.state
    let officeId = this.props.teamsRaw.find(t => t.id === Number(team)).office.id
    this.props.dispatch(createEmployee(
      {
        first_name: firstName,
        last_name: lastName,
        team_id: team,
        email,
        offices: [officeId],
      }))
  }
}
