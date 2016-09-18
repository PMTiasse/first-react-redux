/**
 * Created by Pat on 9/12/2016.
 */
import React, {PropTypes} from 'react';

const CoursesPageTemplate = () => {
  return (
    <div>
      <h1>Courses</h1>
{/*      {props.courses.map(props.courseRow)}
      <h2>Add Course</h2>
      <input
        type="text"
        onChange={props.onTitleChange}
        value={props.course.title} />

      <input
        type="submit"
        value="Save"
        onClick={props.onClickSave} />*/}
    </div>
  );
};

/*//  Each property in props has to be specified here
CoursesPageTemplate.propTypes = {
  //dispatch: PropTypes.func.isRequired, // dispatch is not injected anymore as mapDispatchToProps has been defined.
  courses: PropTypes.array.isRequired,
  courseRow : PropTypes.func.isRequired,
  onTitleChange : PropTypes.func.isRequired,
  course : PropTypes.object.isRequired,
  onClickSave : PropTypes.func.isRequired
};*/

export default CoursesPageTemplate;
