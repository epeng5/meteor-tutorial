Meteor.publish('posts', function(author) {
  // return Posts.find({author: author});
	return Posts.find();
});
