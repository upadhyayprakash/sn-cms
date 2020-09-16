---
title: 'The School of AI - Introduction to Course'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/hello-world/cover.jpg'
tags: ['tutorial', 'tsai', 'beginner']
date: '2020-08-30T05:35:07.322Z'
author:
  name: Prakash Upadhyay
  picture: '/assets/blog/authors/prakash.jpeg'
ogImage:
  url: '/assets/blog/tsai/tsai_cover.png'
---
<figure class="figure">
  <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg" class="sn-image" alt="my alt text" title="Image Title"/>
  <figcaption>Fig. This is my caption text.</figcaption>
</figure>

<figure class="figure">
  <img src="https://cdn2.thedogapi.com/images/Bkf4Ea6NX.gif" class="sn-image" title="Gif Image" />
  <figcaption>Some Caption</figcaption>
</figure>

## Images
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

# Learning Markdown

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid "N/Solid Title")

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger "Build Status")

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

# PieAndAI Meetup
- 85% of Projects never make it.
- Top 10 TIPS for AI Deployment
    1. BEGIN WITH THE END IN MIND
        - Book, '7 habits of Highly effective people'
        - Project the FUTURE in the PRESENT
    2. IDENTIFY YOUR STAKEHOLDER'S NEEDS AND GOALS
        - Take human as the most critical part of the system. Orient your goals with their GOALS and Concerns.
        - FACT: Any NN is risky for Financial usecases in US.
    3. IDENTIFY MODEL/PROJECT CONTSTRAINTS
        - Clients constraints
    4. RISK
        - "Phase-Gate Model" (https://www.iamip.com/upl/images/604606/phase-gate-model.png)
		    - E.g. predicting the 'Monday' forecast for the share market, based on the data of Tuesday forecasts.
    5. PLANNING FOR OBSOLESCENES:
    6. PLAN AROUND THE ANALYTICS MATURITY MODEL:
    https://www.gartner.com/smarterwithgartner/the-cios-guide-to-artificial-intelligence/
    7. VALIDATION OVERKILL:
        - Use Cross-Validation(shuffling the Training and Testing data sets)
    8. SIMLICITY AND FLEXIBILITY ARE YOUR ALLIES:
    9. CREATE A CHAMPION/CHALLENGER TESTING APPROACH
    10. WHAT IS YOUR "UNDO" plan
        - Taking the model out of production without damanging other linked systems.
        - Test the model UNDO.

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

<prakash.upadhyay93@yahoo.com>
<https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg>

<figure class="figure">
  <div class="sn-table">
    <table>
      <thead>
        <tr>
          <td>Key</td>
          <td>Value</td>
        </tr>
      </thead>
    </table>
  </div>
  <figcaption>Table-1: Sample Table with Caption</figcaption>
</figure>

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```
For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```
## Syntax Highlighting

```python
# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))

```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

<div class="sn-table">

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |
</div>

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
