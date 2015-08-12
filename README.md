# Exercise 02

[Final App](http://ramybenaroya.github.io/exercise02/)

##Installation
- `git clone https://github.com/ramybenaroya/exercise02.git`
- `cd exercise02`
- `bower i`
- `serve`
- go to [http://localhost:3000](http://localhost:3000)

##Instructions
- In this project you have a [JSON file](http://localhost:3000/game-of-thrones.json) of Game of Thrones houses and the characters of each house.
- In this JSON file you have all the data that you need in order to create the list of houses and characters.
- You need to create a list of the houses
- Each house has a nested list of characters with name, description, image path, and a link to their wiki page
- **Support multiple selection of houses to show. If no house is selected, show all of them.**
- **Support order change of people in each house by drag & drop.**

##Hints
- Here are some hints about how to create links from the data
	- Wiki page: `http://gameofthrones.wikia.com/wiki/{{wikiSuffix}}`
	- Image: `http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-{{imageSuffix}}.jpg`
- This project already comes with jqueryUI. You can use [sortable](https://jqueryui.com/sortable/) in order to implement the drag & drop
- This project already comes with [select2](https://select2.github.io/) which is jquery plugin for all kinds of shiny nice select boxes.

Note: Each character data object contains `wikiSuffix` & `imageSuffix` properties.
- Useful Native Javascripts Methods
	- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Useful jquery methods
	- [$.getJSON](http://api.jquery.com/jquery.getjson/)
	- [append](http://api.jquery.com/append/)
	- [change](https://api.jquery.com/change/) - this is good for hooking on a select box change
	- [val](http://api.jquery.com/val/) - this is good for getting the current selected houses.  
		For example `$('select').val()` --> `['house1', 'house2']`
	- [show](http://api.jquery.com/show/)
	- [hide](http://api.jquery.com/hide/)


