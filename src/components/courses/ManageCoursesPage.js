/**
 * Created by Pat on 9/10/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      authors: this._arrangeAuthorsList(this.props.authors),
      loading: false
    };

    this.onSave = this.onSave.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  //  Triggered each time new props are received
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course ),
      authors: this._arrangeAuthorsList(nextProps.authors)});
    } /*else if (this.props.ajaxCallOngoing != nextProps.ajaxCallOngoing) {
      this.setState({ loading : (nextProps.ajaxCallOngoing > 0) });
    }*/
  }

  _arrangeAuthorsList(authorsList) {
    return authorsList.map((author) =>
      { return {
        value : author.id,
        text : author.firstName + ' ' + author.lastName
      };
      }
    );
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course : course});
  }

  onSave(event) {
    event.preventDefault();
    this.setState({ loading : true });
    this.props.actions.saveCourse(this.state.course).then(() => this.redirect())
      .catch((error) => {
        this.setState({ loading : false });
        toastr.error(error);
      }
    );
  }

  redirect() {
    this.setState({ loading : false });
    toastr.success('Course saved...Boss.');
    this.context.router.push('/courses');
  }

  render() {

    return (
        <CourseForm
          course={this.state.course}
          onChange={this.updateCourseState}
          onSave={this.onSave}
          allAuthors={this.state.authors}
          errors={this.state.errors}
          loading={this.state.loading} />
    );
  }
}

ManageCoursesPage.propTypes = {
  course : PropTypes.object.isRequired,
  actions : PropTypes.object.isRequired,
  authors : PropTypes.array,
  ajaxCallOngoing : PropTypes.number
};

//Pull in the React Router context so router is available on this.context.router
ManageCoursesPage.contextTypes = {
  router: PropTypes.object
};

//  Inject data to the component
function mapStateToProps(state /*Passed by the rootReducer, containing all the reducers (incl. courseReducer)*/,
                         ownProps /*Reference to the component's own props*/) {
  let course = {id: '', watchHref: '', title:'', authorId:'',
    lenght:'', category:''};

  if (ownProps.params.id) {
    const courses =  state.courseReducer;

    courses.some((courseLoop) => {
      if (courseLoop.id === ownProps.params.id/* id is declared in routes.js*/) {
        course = Object.assign({}, courseLoop);
        return true;
      }
    });
  }

  return {
    course: course,
    authors: state.authorReducer,
    ajaxCallOngoing: state.ajaxStatusReducer
  };
}

function mapDispatchToProps(dispatch /*Connecting the actions to the reducers*/) {
    return {
        //createCourse: (course) => dispatch(courseActions.createCourse(course))
        //  Using the most automatic way : bindActionCreators(courseActions, dispatch)
        //    which returns an object with all the actions fom courseActions mapped in.
        //    We can specified an action among all the courseActions to get a specific action.
      actions: bindActionCreators(courseActions, dispatch)
    };
}

//  By using the connect function, the CoursesPage component is interacting with Redux
//    By interacting with Redux, the component is now a container component
export default connect(mapStateToProps, mapDispatchToProps/*Optional parameter*/)(ManageCoursesPage);
//  mapDispatchToProps allows to identify what actions we want to expose on the component.
//    A "dispatch" property is given to the component if not defined.
