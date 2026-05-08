
# A study with strings

This chapter will help you get proficient with str manipulations in Python. To solve the following exercises you need to have some basic understanding of:
- if statements
- for loops (and potentially some indexing on strings)
- reading and writing from and to files

## Exercise 1:

### Part 1

The folder {download}`./A Study with Strings.zip` has multiple text files with the chapters of a mystery book ("A study in scarlet" by Arthur Conan Doyle). Each file have undergone a tranformation in which some characters of the text were changed. See below the list of all transformations:

- Chapter 1: all lower case characters became upper case, and vice-versa.
- Chapter 2: the characters 's', 't', 'r', 'i', 'n' and 'g' swapped between lower and upper case. That is, lower case characters became upper case, and vice-versa.
- Chapter 3: all the characters were shifted to the next letter of the alphabet. For example, 'a' -> 'b', 'b' -> 'c' ... 'z' -> 'a'
- Chapter 4: all the characters were shifted to the previous letter in the alphabet. This only affected characters in lower case. For example, 'b' -> 'a' and 'a' -> 'z', but 'B' -> 'B' and 'A' -> 'A'.
- Chapter 5: each letter of the alphabet ('abcdefghijklmnopqrstuvwxyz') was replaced by the following characters: 'qwertyuiopasdfghjklzxcvbnm', respectively. For example, 'a' -> 'q', 'b' -> 'w',  ..., 'z' -> 'm'.
- Chapter 6: all characters were shifted by two letters in the alphabet ('a' -> 'c'), except the letters that were part of one of those digraph (two-letter grouping): 'th', 'er', 'on', 'an', 're', 'he', 'in', and 'ed'. For example, 'The Cat' -> 'The Ecv'. Note that it does not matter if the letters are lower or upper case (or a mix of the two) to be counted as one of the digraphs. 

- Chapter 7: all the alphanumeric characters were shifted by a certain amount. The first character shifted, was shifted by 1, the second character shifted was shifted by 2, and so on, incrementing 1 to the shifted amount at every new shifted character. Spaces or other non alphanummeric characters do not add to the shift. Also, note that a shift $s$ that can always be written in the form: 
$$s = 26*k + i$$
with integers $k$ and $i$. And that different k values for a given n results in the same operation. For example, a shift of 2 ($k=0, n=2$) is equal to a shift of 28 ($k=1, n=2$).

For each chapter, implement a Python function that can undo the transformation and save a new txt file with the original text. Include in your solution functions to read and (re)write the files.

:::{note}
You may note that the first chapters are easier - obviously to attract the mystery lovers into actually reading the book while programming their solutions. Of course, reading the actual book is not needed to solve the exercise, but if you like and have time, give it a try.. maybe you will find out some new passion, for programming or for mystery books. Who knows? 
:::

### Part 2 (Challenge!):

For the second part of the book (the files containing chapters 8 to 14), the chapters were modified using similar transformations described above in chapters 2, 3, 4, 5 and 7. However, in the previous part you new which operation was performed and with which parameters. For example, a shift to the next (a shift of 1) or previous (a shift of -1) character. Now, some of that information is missing.    

- Chapter 8: similar to Chapter 2, but with another set of characters. (Maybe it's easy to find out looking at the text, but what if you couldn't?)
- Chapter 9: similar to Chapter 3, but with a different shift.
- Chapter 10: similar to Chapter 3, but with a different shift.
- Chapter 11: similar to Chapter 4, but with a different shift.
- Chapter 12: similar to Chapter 4, but with a different shift.
- Chapter 13: similar to Chapter 5, but with a different sequence of characters. 
- Chapter 14: similar to Chapter 7, but with the first shift being different.


Similar to the previous exercise, implement a script that can undo the transformation of each chapter.


:::{tip}
The last two chapters are a bit harder to solve. And some of these problems would require a tool called [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis) to solve in an automatic way. Feel free to have a look at it if you are interested in Cryptography. However, it's also possible to break the code by deduction and some trial and error (look for common words in English that contain only 2 or 3 letters!). 
:::


