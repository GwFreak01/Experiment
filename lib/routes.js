/**
 * Created by GWFreak01 on 7/30/16.
 */
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});