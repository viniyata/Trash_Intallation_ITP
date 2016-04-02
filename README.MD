# A trash installation for ITP recycling bins

##Images of trash items are projected on the wall going down toward the two trash cans (recycling to recycling trash to trash).
#### [website lives here](http://oryano.github.io/Trash_Intallation_ITP/)
The size of the canvas needs to be change according to the projection on the wall.


### there are two folders from which the images are pulled:
* ./assets/trash  (16 files)
* ./assets/recycle (33 files)

## images can be added to each of the folders following these rules:
* must be .jpg format
* needs to be 300px wide
* need to be on a white background
* name must match the following number in folder (if last is 33 then number new pic will be 34)
* code needs to be changed to match the number in particle_system file on line 8 to the new amount of pics:
```javascript
for (var i = 0; i <= 33; i ++) {
  this.possible_images.push(loadImage('assets/' + type + '/' + i + '.jpg'));
}
```
#ToDos
1. Make a website that allows uploads of new images in the correct bins.
2. Fix the [API](https://trash-it-oryano.c9users.io/) and have the images pulled from there.
3. Rent projector from ER and install in ITP entrance (email Rob - who gave permission already).
4. replace bins to ones without cover.


The code for the installation is based on Daniel Shiffman's particle system from The Nature Of Code book
using P5.js
