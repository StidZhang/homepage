
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/home');
    }
});

FlowRouter.route('/home', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "home"});
        DocHead.setTitle('Stid | Homepage');
    }

})

FlowRouter.route('/project', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "project"});
        DocHead.setTitle('Stid | Project');
    }
});

FlowRouter.route('/homepage.pdf')
