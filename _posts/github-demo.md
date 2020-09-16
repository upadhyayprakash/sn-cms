---
title: 'GitHub Markdown Features - Demo'
excerpt: 'Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.'
coverImage: '/assets/blog/hello-world/cover.jpg'
tags: ['github', 'markdown', 'beginner']
date: '2020-09-14T04:35:07.322Z'
author:
  name: Prakash Upadhyay
  picture: '/assets/blog/authors/prakash.jpeg'
ogImage:
  url: '/assets/blog/tsai/tsai_cover.png'
---
# Text

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

# List

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

# Images

If you want to embed images, this is how you do it:
<figure class="figure">
  <img src="https://octodex.github.com/images/yaktocat.png" class="sn-image" title="Image of Yaktocat" />
  <figcaption>GitHub Image Demo</figcaption>
</figure>

# Headers & Quotes

## Structured documents

Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a `#` to create headings. Multiple `##` in a row denote smaller heading sizes.

### This is a third-tier heading

You can use one `#` all the way up to `######` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
>- Captain Janeway

# Code

There are many different ways to style code with GitHub's markdown. If you have inline code blocks, wrap them in backticks: `var example = true`.  If you've got a longer block of code, you can indent with four spaces:

    if (isAwesome){
      return true
    }

GitHub also supports something called code fencing, which allows for multiple lines without indentation:

```
if (isAwesome){
  return true
}
```

And if you'd like to use syntax highlighting, include the language:

```javascript
if (isAwesome){
  return true
}
```

# Extras

GitHub supports many extras in Markdown that help you reference and link to people. If you ever want to direct a comment at someone, you can prefix their name with an @ symbol: Hey @kneath — love your sweater!

But I have to admit, tasks lists are my favorite:

- [x] This is a complete item
- [ ] This is an incomplete item

When you include a task list in the first comment of an Issue, you will see a helpful progress bar in your list of issues. It works in Pull Requests, too!

And, of course emoji!