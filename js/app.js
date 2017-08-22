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
