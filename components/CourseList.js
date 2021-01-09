import React, {useState} from 'react';
import { ScrollView,  } from 'react-native';
import { getCourseTerm } from '../utils/terms';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';

const CourseList = ({ courses }) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));


    return (
        <ScrollView>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseSelector courses={termCourses} />
        </ScrollView>
    )
}



export default CourseList;