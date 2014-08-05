DivFader
========
A minuscule image and div slider using jQuery.


## Configuration
The DivFader can be easily configured by tweaking the playback variables in divfader.js.

`autoplay` *— Automatic playback on load*  
`showControls` *— Show slide index controls (dots)*  
`fadeTimer` *— Transition time in miliseconds*  
`delay` *— Delay between slides in miliseconds*  
 
 
## Usage
1. For the script to work properly, use class "divfader" as container.
2. Place divs/objects you want to include in the slider in class "divfader-content".
3. Controls (dots) will be created in class "divfader-controller".
4. For next/previous-controls, use classes "divfader-next" and "divfader-previous".

```HTML
<div class="divfader">
	<div class="divfader-content">
		<div class="slide">Sample text 1</div>
		<div class="slide">Sample text 2</div>
		<div class="slide">Sample text 3</div>
		<div class="slide">Sample text 4</div>
		<div class="slide">Sample text 5</div>
		<div class="slide">Sample text 6</div>
		<div class="slide">Sample text 7</div>
	</div>
	<div class="divfader-controller"></div>
	<div class="divfader-next">Next</div>
	<div class="divfader-previous">Previous</div>
</div>
```

*For the full example, see index.html.*
