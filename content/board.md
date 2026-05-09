---
site:
  hide_outline: true
---

# Challenge board
::::{grid} 1 
:class: col-page-right

:::{grid-item-card} 
:header: **Random Exercise Generator**
<!-- <span class="text-gradient" style="font-weight:bold;"><em>Write a program that  ..</em></span> -->

```{anywidget} random-question.mjs
:css: ./random-question.css
{
  "count": 0,
  "questions": ["Write a program that takes one "],
  "field1": ["int", "float", "str", "bool"],
  "field2": ["dict", "tuple", "list"],
  "question": [
    ["Write a program that takes a ", "Write a function that converts a", "Write a function take two "],
    [ ["int", "float", "str", "bool"], 
      [" list of tuples", "n array of tuples"], 
      ["lists", "dictionaries", "arrays"]], 
    [" variable, and do an operation with a ", [" into a"], [" and returns a new element containing "]],
    [ ["int", "float", "str", "bool"], 
      [" dict with tuples", " list of strs"], 
      ["the union (or sum) of their elements", "the intersection (or subtraction) of their elements", "a combination of half the values of the first element, and half of the second"]],
    [" variable. The resulting value should be of the type of the first variable. Investigate whether there are values that raise an error.", ". And a second function that does the reverse operation.", "."]] 
}
```
:::
::::

::::{grid} 1 1 2 3
:class: col-page-right

:::{grid-item-card} 
:header: <span style = "color : #6c8308; font-weight:bold;">A Study with Strings</span>
:link: ./a-study-with-strings
<span class="tag str">str</span>
<span class="tag loops">loops</span>
<span class="tag ifs">if statements</span>
:::

:::{grid-item-card} 
:link: ./neuro-signal-quest1 
:header: <span style = "color : #3803e4; font-weight:bold;">Neuro Signal Quest 1</span>

<span class="tag array">arrays</span>
<span class="tag plots">plots</span>
<span class="tag neuro">neuro</span>
:::


:::{grid-item-card} 
:header: <span style = "color : #d4aa02; font-weight:bold;">Cryptography</span>
:link: ./cryptography
<span class="tag array">arrays</span>
<span class="tag list">lists</span>
<span class="tag str">str</span>
:::


