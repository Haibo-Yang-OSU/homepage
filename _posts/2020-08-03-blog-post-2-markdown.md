---
title: 'How to use Markdown'
date: 2020-08-03
permalink: /posts/2020/08/blog-post-2/
tags:
  - markdown
  - html
  - tool
---

# Introduction
Markdown is a text-to-HTML conversion tool for web writers.
Markdown allows you to write with easy-to-read and easy-to-write plain text format.
However, Markdown is not a replacement for HTML, or even close to it. Its syntax is very small, corresponding only to a very small subset of HTML tags. 

# Syntax

## Overview
`Markdown’s syntax is intended for one purpose: to be used as a format for writing for the web.
Markdown is not a replacement for HTML, or even close to it. Its syntax is very small, corresponding only to a very small subset of HTML tags. The idea is not to create a syntax that makes it easier to insert HTML tags. In my opinion, HTML tags are already easy to insert. The idea for Markdown is to make it easy to read, write, and edit prose. HTML is a publishing format; Markdown is a writing format. Thus, Markdown’s formatting syntax only addresses issues that can be conveyed in plain text.`

## Block Elements

### Paragraphs and Line Breaks
Def: A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines.   
When you do want to insert a `<br />` break tag using Markdown, you end a line with two or more spaces, then type return.

### Headers
Markdown supports two different styles of headers:   
Setext-style: use underlines (any number) of equal signs and dashes for first- and second-level headers respectively. For example:  

---------------------------

This is first-level header.   
=== 

This is second-level header.   
---
----------------------------

atx-style: 1-6 hash characters at the start of the line corresponds to six levels of headers. For example:

-----------------------
# First-level header
## Second-level header
##### Fifth-level header    
------------------------

### Blockquotes
Markdown uses email-style `>` characters for blockquoting. Blockquotes can be nested by adding additional `<`.

`< This is a quote.`
< This is a quote.
`<< Nested quote.`
<< Nested quote.

### Lists
Unordered lists use asterisks, pluses, and hyphens as list markers:
* list 1
+ list 2
- list 3

Ordered lists use numbers of followed by periods:
1. ordered list1
2. ordered list2  
  
Note that the actual number has no effect on the HTML output, say, it is same to write 3., 8, in the above example. It is translated to HTML:

    <ol>
        <li>ordered list1</li>
        <li>ordered list2</li>
    </ol>

List markers typically start at the left margin, but may be indented by up to three spaces. List markers must be followed by one or more spaces or a tab.    
List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab.    
To put a blockquote within a list item, the blockquote’s > delimiters need to be indented.    
To put a code block within a list item, the code block needs to be indented twice — 8 spaces or two tabs.    
A number-period-space sequence at the beginning of a line would be regarded as an ordered list. To avoid this, you can backslash-escape the period, e.g. 1\.

### Code Blocks
Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both `<pre>` and `<code>` tags.     
To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab. 

### Horizontal Rules
Produce a horizontal rule tag `<hr />` by placing three or more hyphens, asterisks, or underscores on a line by themselves. For example:

-----

*****

## Span Elements

### Links
Inline links: `[link text](URL)`.    
URL could be a web location or a local resource.

Reference-style links use a second set of square brackets, inside which you place a label of your choosing to identify the link.
`[link text] [id]` and anywhere in the document `[id]: URL`.     
The implicit link name shortcut allows you to omit the name of the link, in which case the link text itself is used as the name.
`[link text] []` and anywhere in the document `[link text]: URL`.  

### Emphasis
HTML `<em>`: one asterisk `*` or underscore `_`.

`*em*, _em_`
*em*, _em_

HTML `strong`: double asterisks `*` or underscores `_`.

`**strong**, __strong__`
**strong**, __strong__

If you surround an `*` or `_` with spaces, it’ll be treated as a literal asterisk or underscore.
To produce a literal asterisk or underscore at a position where it would otherwise be used as an emphasis delimiter, you can backslash escape it:
`\*em sentence\*`

### Code
Use the `` `print()` `` function.

With a code span, ampersands and angle brackets are encoded as HTML entities automatically, which makes it easy to include example HTML tags.

### Image
Similar to hyperlinks. 

`
![text](URL)
`

`
![text][id]
`



## Reference:
[Markdown](https://daringfireball.net/projects/markdown/syntax#overview) 





















