---
site:
  hide_outline: true
---

# Challenge board
::::{grid} 1 
:class: col-page-right

:::{grid-item-card} 
:header: **Exercise generator**
<!-- <span class="text-gradient" style="font-weight:bold;"><em>Write a program that  ..</em></span> -->
```{anywidget} random-question.mjs
:css: ./random-question.css
{
  "count": 0,
  "question": ["Write a program that converts from "],
  "field1": ["int", "float", "str", "bool"],
  "field2": ["dict", "tuple", "list"]
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

:::{card}
:link: ./neuro-signal-quest1 
:header: <span style = "color : #3803e4; font-weight:bold;">Neuro Signal Quest 1</span>

<span class="tag array">arrays</span>
<span class="tag plots">plots</span>
<span class="tag neuro">neuro</span>
:::


:::{card}
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

:::
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
