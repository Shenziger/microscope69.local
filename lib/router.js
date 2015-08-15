/**
 * Created by Anton on 14.08.2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
    this.route('postsList', {path: '/'});
});

Router.onBeforeAction('loading');