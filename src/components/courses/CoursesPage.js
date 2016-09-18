/**
 * Created by Pat on 9/10/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
//import {bindActionCreators} from 'redux';
import CoursesList from './CoursesList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

/*  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState( course );
  }

  onClickSave(event) {
    //alert(`Saving ${this.state.course.title}`);
    //  The use of this.props.dispatch is useless since the mapDispatchToProps func :
    //    this.props.dispatch(courseActions.createCourse(this.state.course));

    //  The following is possible because of mapDispatchToProps
    this.props.createCourse(this.state.course);
  }*/

  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CoursesList courses={courses} />

        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
      </div>
    );
  }
}

//  Each property in props has to be specified here
CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, // dispatch is not injected anymore as mapDispatchToProps has been defined.
  courses: PropTypes.array.isRequired,
  createCourse : PropTypes.func.isRequired
};

//  Inject data to the component
function mapStateToProps(state /*Passed by the rootReducer, containing all the reducers (incl. courseReducer)*/,
                         ownProps /*Reference to the component's own props*/){
  return {
    courses : state.courseReducer
  };
}

function mapDispatchToProps(dispatch /*Connecting the actions to the reducers*/) {
  return {
    createCourse: (course) => dispatch(courseActions.saveCourse(course))
    //  We could also use : bindActionCreators(courseActions, dispatch)
    //    which returns an object with all the actions fom courseActions mapped in.
    //    We can specified an action among all the courseActions to get a specific action.
  };
}

//  By using the connect function, the CoursesPage component is interacting with Redux
//    By interacting with Redux, the component is now a container component
export default connect(mapStateToProps, mapDispatchToProps/*Optional parameter*/)(CoursesPage);
//  mapDispatchToProps allows to identify what actions we want to expose on the component.
//    A "dispatch" property is given to the component if not defined.
