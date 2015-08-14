/**
 * Created by Anton on 14.08.2015.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('postsList', {path: '/'});
});