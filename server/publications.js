/**
 * Created by Anton on 13.08.2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});