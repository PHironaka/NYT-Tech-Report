$.ajax({
  dataType: "json",
  url: 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=e10c3f9a05a646ada38d3a276af17c89',
  method: "GET",
  success: function(nytMostEmailed) {

    nytMostEmailed.results.forEach(function(story){
      var storyTitle = story.title || 'n/a';
      var storyURL = story.url || 'n/a';
      var storyExcerpt = story.byline || '';
      var storyCaption = story.abstract || '';
      var storyImage = story.multimedia[4];

      $('#best-seller-titles').append('<div id="' + story.section + '" class="tech-story">'+ '<img src="' + storyImage.url + '" /><a href="' + storyURL + '" ><h2>' +
        storyTitle + '</h2></a><p>' +
        storyExcerpt + '</p>' + '<p>' + storyCaption + '</p>');

      // $('#' + topStory.rank).attr('nyt-rank', story.rank);
    });

  },
  error: function() {
    console.log('No data.');
  }
});








// $.ajax({
//   dataType: "json",
//   url: 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction' + '&api-key=e10c3f9a05a646ada38d3a276af17c89',
//   type: "GET",
//   success: function(nytimesBestSellers) {
//
//     nytimesBestSellers.results.forEach(function(book){
//       var isbn = book.isbns[0].isbn10;
//       var bookInfo = book.book_details[0];
//       var publishDate = book.published_date || 'n/a';
//       var lastWeekRank = book.rank_last_week || 'n/a';
//       var weeksOnList = book.weeks_on_list || 'New this week';
//
//       $('#best-seller-titles').append('<div id="' + book.rank + '" class="entry"><h2><a href="' +
//         book.amazon_product_url + '" target="_blank">' +
//         bookInfo.title + '</a></h2><h4>' +
//         bookInfo.author + '</h4><h4 class="publisher">' +
//         bookInfo.publisher + '</h4><p>' +
//         bookInfo.description + '</p><p>' +
//         publishDate + '</p> <divclass="stats"><hr><p>Last Week: ' +
//         lastWeekRank + '</p><p>Weeks on list: ' +
//         weeksOnList + '</p></div></div>');
//
//       $('#' + book.rank).attr('nyt-rank', book.rank);
//     });
//
//   },
//   error: function() {
//     console.log('No data.');
//   }
// });
