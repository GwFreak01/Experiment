import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    console.log("Started: Server Side Startup");
    console.log("Ended: Server Side Startup");
});
