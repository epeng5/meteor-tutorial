Template.layout.helpers({
  pageTitle: function() { 
	pageTitle = Session.get('pageTitle');
	if (!pageTitle) { pageTitle = "microscope"; }
	return pageTitle;
  }
});
