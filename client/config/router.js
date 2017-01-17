
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/home');
    }
});

FlowRouter.route('/home', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "home"});
        DocHead.setTitle('Homepage | Stid Zhang');
    }

});

FlowRouter.route('/contact', {
    name: "Contact Infomation",
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contact"});
        DocHead.setTitle('Contact | Stid Zhang');
    }
});

FlowRouter.route('/project', {
    name: "Project Detail",
    action: function() {
        BlazeLayout.render("mainLayout", {content: "project"});
        DocHead.setTitle('Project | Stid Zhang');
    }
});
