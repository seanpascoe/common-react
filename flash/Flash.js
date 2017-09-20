import React from 'react';
import './molecules.css';
import { connect } from 'react-redux';
import { clearFlash } from '../../actions/flash';
import DefaultButton from '../atoms/clickables/DefaultButton';

class Flash extends React.Component {
  clearMessage = () => {
    this.props.dispatch(clearFlash())
  }

  render(){
    return(
      this.props.flash.display ?
        <div id="flash" className={this.props.flash.messageType} ref={c => this.container = c}>
          <div className="flash-content">
            <div>{this.props.flash.message}</div>
            <DefaultButton squished action={this.clearMessage} text='Close' />
          </div>
        </div>
      : null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flash: state.flash
  }
}

export default connect(mapStateToProps)(Flash);
