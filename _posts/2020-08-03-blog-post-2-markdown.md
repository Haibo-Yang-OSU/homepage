---
title: 'Markdown'
date: 2020-08-03
permalink: /posts/2020/08/blog-post-2/
tags:
  - markdown
  - html
  - 
---

# Introduction
Markdown is a text-to-HTML conversion tool for web wirters.
Markdown allows you to write with easy-to-read and easy-to-write plain text format.
However, Markdown is not a replacement for HTML, or even close to it. Its syntax is very small, corresponding only to a very small subset of HTML tags. 

# Syntax

## Overiew

## Block Elements

### Paragraphs and Line Breaks
Def: A paragraph is simply one or more consecutive lines of text, seperated by one or more blank lines.   
When you do want to insert a `<br />` break tag using Markdown, you end a line with two or more spaces, then type return.

### Headers
Markdown supports two different styles of headers:   
Setext-style: use underlines (any number) of equal signs and dashes for first- and second-level headers respectively. For example,   
This is first-level header.
=== 
Thisi is second-level header.
---

atx-style: 1-6 hash characters at the start of the line corresponds to six levels of headers. For example:
# First-level header
## Second-level header
##### Fifth-level header

### Blockquotes
Markdown uses email-style `>` characters for blockquoting. Blockquotes can be nested by adding additional `<`.
< This is a quote.
<< Nested quote.

### Lists
Unordered lists use asterisks, pluses, and hyphens as list markers:
*list 1*
+list 2
-list 3

Ordered lists use numbers of followed by periods:
1. ordered list1
2. ordered list2    
Note that the actual number has no effect on the HTML output, say, it is same to write 3., 8, in the above example. It is translated to HTML:   
<ol>
<li>ordered list1</li>
<li>ordered list2</li>
</ol>
















