# Morning Exercise - Ajax
![Giphy API](https://api.giphy.com/img/giphy_search.gif)

## Introduction
This morning we are going to warm up with some AJAX calls using the [Giphy API](https://github.com/Giphy/GiphyAPI).

## Setup
We have provided you with the completed HTML and CSS, and a partially filled in JS file called `script.js`. You will doing *ALL* of your work in the `script.js` file. You will need to add jQuery to your directory and link it to your html file.
***hint: remember the `getjq` bash command?***

## Assignment
The skeleton of the application has been built for you with the HTML and CSS files, so your only concern is how to take a search query text from the input box and then run that through ajax to hit the Giphy API.

### What you will need to do:
1. Create a click handler that sets a click event for the `button` and then fires a function called `getResults`.
1. Create a function called `getResults` that does the following:
  - First, clears the DOM of any elements of the class `item` (check this [cheat sheet](https://oscarotero.com/jquery/)to see if you can find out home to remove elements from the DOM)s
  - Take the text value of the input box and store it in a variable called `query`
  - Create an AJAX call that has the following fields
    * type: 'GET'
    * url: 'http://api.giphy.com/v1/gifs/search?q=" + your search term +"&api_key=dc6zaTOxFJmzC&limit=5'
    * success: This is the function that is called when the AJAX call returns after a successful API call.

#### Success Function
You'll want your "success: function()" to look something like this:

```javascript
function(results) {
  let data = results.data;
  $results = $('<ul></ul>');
  var $item, $downsized, $description, $thumbnail, $rating, $type, $source
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
```
