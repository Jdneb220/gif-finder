$(document).ready(function(){
  console.log("loaded");
  var $body = $('body');

  let makeGIFs = function(results) {
    console.log('here')
    let data = results.data;
    $results = $('<ul></ul>');
    var $item, $downsized, $description, $thumbnail, $rating, $type, $source

    data.forEach(function(x){
      let $item = $("<li class='item'></li>")
      let $thumbnail = $("<img class='thumbnail' />")
      let $description = $("<div></div>")
      let $rating = $("<p class='rating'></p>")
      let $type = $("<p class='type'></p>")
      let $source = $("<p class='source'></p>")
      $thumbnail.attr('src', x.images.downsized.url)
      $rating.text('rating - ' + x.rating)
      $type.text('' + x.type)
      $source.html('<a target=_blank href="'+x.url+'">' + x.source+ '</a>')
      $description.append($rating).append($type).append($source)
      $item.append($description).append($thumbnail)
      $results.append($item)
    })
    $body.append($results)
    // Use a forEach method to iterate over all of the `data` items and then do
    // the following in the for loop / forEach:
    //   - USING JQUERY, create a 'li' element and assign it to '$item',
    //   create a '<img>' element and assign it to '$thumbnail', create
    //   a '<div>' element and store it in $description, and create '<p>'
    //   elements and store them in $rating, $type, and $source
    //   - Add a class of 'item' to '$item'
    //   - Add a class of 'thumbnail' to '$thumbnail'
    //   - Add a class of 'rating' to '$rating'
    //   - Add a class of 'type' to '$type'
    //   - Add a class of 'source' to '$source'
    //   - Find where the downsized image url is being stored in the result
    //   object and then set the '$thumbnail's src attribute to it
    //  (hint: the url will probably end with "giphy-downsized.gif")
    //  (second hint: just use the smallest sized image)
    //   - Find where the GIF's rating is being stored in the object
    //   and set $rating's text to that, do the same for the type and source
    //   - Append $rating, $type, $source to $description
    //   - Append $thumbnail and $description to $item
    //   - Append $item to $results
    //  - End forEach method
    //  - Append $results to $body
  }

  // getResults function goes here
  let getResults =  function(){
    $('.item').remove()
    let query = $('#giphy-search').val()
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + query +"&api_key=dc6zaTOxFJmzC&limit=5",
      method: "GET",
      success: function(results){
        makeGIFs(results)
      },
      error: function(){
        console.log('das system und liebe')
      }
    })
  }

  // Event Handlers go here
  $('#click-me').on("click",function(){
    getResults()
  })

  $('#giphy-search').on("keydown",function(e){
    if (e.which === 13)
      getResults()
  })
});
