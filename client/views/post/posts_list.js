/**
 * Created by Anton on 05.08.2015.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});