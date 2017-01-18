
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/about');
    }
});

FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "about"});
        DocHead.setTitle('Stid | About');
    }

})

FlowRouter.route('/project', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "project"});
        DocHead.setTitle('Stid | Project');
    }
});
