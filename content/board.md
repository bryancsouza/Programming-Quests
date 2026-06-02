---
site:
  hide_outline: true
---

# Challenge board
::::{grid} 1 
<!-- :class: col-page-right -->

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

::::::{tab-set}
:class: col-page-right

:::::{tab-item} Week 1
:sync: week1

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
:link: ./neuro-signal-01 
:header: <span style = "color : #3803e4; font-weight:bold;">Neuro Signal Quest 1</span>

<span class="tag array">arrays</span>
<span class="tag plots">plots</span>
<span class="tag neuro">neuro</span>
:::


:::{grid-item-card} 
:header: <span style = "color : #d4aa02; font-weight:bold;">Cryptography 1</span>
:link: ./cryptography-01
<span class="tag array">arrays</span>
<span class="tag list">lists</span>
<span class="tag str">str</span>
:::
::::
:::::

:::::{tab-item} Week 2
:sync: week2
::::{grid} 1 1 2 3
:::{grid-item-card} 
:header: <span style = "color : #d4aa02; font-weight:bold;">Cryptography 2</span>
:link: ./cryptography-02-landing
<span class="tag array">arrays</span>
<span class="tag list">lists</span>
<span class="tag str">str</span>
:::
::::
:::::

:::::{tab-item} Week 3
:sync: week3
::::{grid} 1 1 2 3
:::{grid-item-card} 
:header: <span style = "color : #d4aa02; font-weight:bold;">Cryptography 3</span>
:link: ./cryptography-03-landing
<span class="tag array">arrays</span>
<span class="tag list">lists</span>
<span class="tag str">str</span>
:::
::::
:::::

:::::{tab-item} Week 4
:sync: week4
::::{grid} 1 1 2 3
:::{grid-item-card} 
:header: <span style = "color : #6c8308; font-weight:bold;">A Study with Strings</span>
:link: ./a-study-with-strings
<span class="tag str">str</span>
<span class="tag loops">loops</span>
<span class="tag ifs">if statements</span>
:::
::::
:::::
::::::


<!-- :::{card}
:header: **New Card**
:link: ./a-study-with-strings
:class-header: 

<span class="tag array">arrays</span>
<span class="tag plots">plots</span>
<span class="tag str">str</span>
<span class="tag loops">loops</span>
<span class="tag ifs">if statements</span>
<span class="tag neuro">neuro</span>
<span class="tag cryptography">cryptography</span>
::: -->



<!-- 
- [ ] str
- [ ] list
- [ ] dict
- [ ] arrays
- [ ] tuple
 -->

<!-- Here's some <span class="text-gradient" style="font-weight:bold;">span <em>styled</em></span> content

```{note}
:class: text-gradient
I'm _very stylish_.
```

:::{div}
:class: tag str
Test
::: -->


<!-- <div class="text-gradient" style="font-weight: bold;">Here's my <em>div</em></div>

Here's some <span class="text-gradient" style="font-weight:bold;">span <em>styled</em></span> content -->