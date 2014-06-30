Gettysburg
==========

Roll your own humble CMS because down with the corporate establishment etc.
Powered by markdown, express, and skrollr.

### Another static site generator?

Why not? Gettysburg's operating principle is, _everything is easy now_. 
[Server configuration](https://github.com/shackbarth/gettysburg/blob/master/app.js),
[content processing](https://github.com/shackbarth/gettysburg/blob/master/lib/process_content.js), 
[HTML templating](https://github.com/shackbarth/gettysburg/blob/master/views/content.ejs), 
[stylesheeting](https://github.com/shackbarth/gettysburg/blob/master/public/stylesheets/style.styl), 
[dependency management](https://github.com/shackbarth/gettysburg/blob/master/package.json),
[documentation](https://github.com/shackbarth/gettysburg/blob/master/README.md): 
six files is all you need, and none of these need to take more than a screenful of code anymore.

### How does it work?

Just put your markdown files in the `content` folder, and add some images by
the same name in the `public/images` folder, add some page-specific stylesheets (if you have to) 
in the `public/stylesheets` folder, and the site builds itself.

Gettysburg will elevate the first two lines of each markdown file as the title and the subtitle.

### What does it look like?

Here's a site [built with Gettysburg](http://shackbarth-gettysburg.herokuapp.com/). The specific content 
is deployed from a [branch](https://github.com/shackbarth/gettysburg/tree/shackbarth) of the
[framework-only master](https://github.com/shackbarth/gettysburg), 
which is how you should do it if you want to contribute back framework
code.

### How should I deploy it?

Just use Heroku.

### How can my audience give me comments or +1's or Pinterest etcetera?

No.
