/**
 * Created by GWFreak01 on 7/30/16.
 */

Courses = new Meteor.Collection('courses');

CourseSchema = new SimpleSchema({
   courseName: {
       type: String,
       label: "Course Name"
   },
    courseID: {
       type: String,
        label: "Course ID"
    },
    description: {
       type: String,
        label: "Description"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        }
    }
});

Courses.attachSchema(CourseSchema);