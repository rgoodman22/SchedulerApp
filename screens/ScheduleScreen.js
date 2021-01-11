import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CourseEditScreen from './CourseEditScreen';
import Banner from '../components/Banner';
import CourseList from '../components/CourseList';
import UserContext from '../utils/UserContext';
import {firebase} from '../firebase';

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});

const ScheduleScreen = ({navigation}) => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';

  const view = (course) => {
      navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  useEffect(() => {
    const db = firebase.database().ref();
    db.on('value', snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()))
    }, error => console.log(error));
    return () => { db.off('value', handleData); };
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default ScheduleScreen;