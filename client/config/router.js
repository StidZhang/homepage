
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

});

FlowRouter.route('/contact', {
    name: "Contact Infomation",
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contact"});
        DocHead.setTitle('Stid | Contact');
    }
});

FlowRouter.route('/project', {
    name: "Project Detail",
    action: function() {
        BlazeLayout.render("mainLayout", {content: "project"});
        DocHead.setTitle('Stid | Project');
    }
});
