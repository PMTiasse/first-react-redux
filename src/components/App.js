/**
 * Created by Pat on 9/10/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from "./common/Header";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loading : true };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading : nextProps.loading });
  }

  render () {
    return (
      <div className="container-fluid">
        <Header loading={this.state.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired,
  loading : PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading : (state.ajaxStatusReducer > 0)
  };
}

export default connect(mapStateToProps/*mapDispatchToProps : Optional parameter*/)(App);
