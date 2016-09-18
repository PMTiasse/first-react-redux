/**
 * Created by Pat on 9/13/2016.
 */
import React, {PropTypes} from 'react';
import CoursesListRow from './CoursesListRow';

const CoursesList = ({courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CoursesListRow
          key={course.id}
          course={course} />)}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CoursesList;
