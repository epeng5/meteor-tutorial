if (Posts.find().count() == 0) {
  Posts.insert({
    title: 'Rotoworld NBA',
    url: 'http://www.rotoworld.com/sports/nba/basketball'
  });

  Posts.insert({
    title: 'RotoGrinders NBA',
    url: 'https://rotogrinders.com/articles/category/nba'
  });

  Posts.insert({
    title: 'Rotowire NBA',
    url: 'http://www.rotowire.com/basketball/features/'
  });
}
