import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Form from '../components/Form';

const validationSchema = Yup.object().shape({
    id: Yup.string()
      .required()
      .matches(/(F|W|S)\d{3,}/, 'Must be a term and 3-digit number')
      .label('ID'),
    meets: Yup.string()
      .required()
      .matches(/(M|Tu|W|Th|F)+ +\d\d?:\d\d-\d\d?:\d\d/, 'Must be weekdays followed by start and end time')
      .label('Meeting times'),
    title: Yup.string()
      .required()
      .label('Title'),
  });

const CourseEditScreen = ({route}) => {
    const course = route.params.course;

    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <Form
                    initialValues={{
                        id: course.id,
                        meets: course.meets,
                        title: course.title,
                    }}
                    validationSchema={validationSchema}
                    style={styles.fieldContainer}
                >
                    <Form.Field
                        name="id"
                        leftIcon="identifier"
                        placeholder="F110"
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.field}
                    />
                   <Form.Field
                        name="meets"
                        leftIcon="calendar-range"
                        placeholder="MThu 12:00-13:50"
                        autoCapitalize="none"
                        style={styles.field}
                    />
                   <Form.Field
                        name="title"
                        leftIcon="format-title"
                        placeholder="Introduction to programming"
                        style={styles.field}
                    /> 
                </Form>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ADD8E6'
    },
    field: {
        height: 50,
        width: 300,
        padding: 5,
        backgroundColor: 'white',
    },
    fieldContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2.
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    label: {
        fontWeight: 'bold'
    }
});

export default CourseEditScreen;