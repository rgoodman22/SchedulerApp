import React, {useState} from 'react';
import { ScrollView,  } from 'react-native';
import { getCourseTerm } from '../utils/terms';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';

const CourseList = ({ courses, view }) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));


    return (
        <ScrollView>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseSelector courses={termCourses} view={view}/>
        </ScrollView>
    )
}



export default CourseList;