# Синхронные и фсинхронные функции

##**Файловая структура**

```

  async_task  |
              |_ callback |
              |           |_ data |
              |           |       |_ data_1.json
              |           |       |_ data_2.json
              |           |       |_ data_3.json
              |           |
              |           |_ index.js
              |           |_ threefiles.js
              |           |_ twofiles.js
              |           |_ twofilesparal.js
              |           |_ twoonefiles.js
              |
              |_ generator|
              |           |_ data |
              |           |       |_ data_1.json
              |           |       |_ data_2.json
              |           |       |_ data_3.json
              |           |
              |           |_ index.js
              |           |_ threefiles.js
              |           |_ twofiles.js
              |           |_ twofilesparal.js
              |           |_ twoonefiles.js
              |
              |_ promise  |
              |           |_ data |
              |           |       |_ data_1.json
              |           |       |_ data_2.json
              |           |       |_ data_3.json
              |           |
              |           |_ index.js
              |           |_ threefiles.js
              |           |_ twofiles.js
              |           |_ twofilesparal.js
              |           |_ twoonefiles.js

```
## callback, promise, generator

В фале `index.js` происходит вызов функций.
В остальных файлах находится реализация каждой функции.

файлы:
- twofile.js - последовательное чтение двух фалов;
- twofilesparal.js - параллельное чтение двух файлов;
- threefiles.js - параллельное чтение трех файлов;
- twoonefiles.js - параллельное чтение двух файлов и чтение третьего последовательно (чтение двух параллельно и двух последовательно реализованно в этой же функции и находится в закомментированом состоянии).


***
_вызов каждой функций закомментирован для того чтобы избежать захламления результатов на выходе_
***
