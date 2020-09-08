---
title: Short-circuiting de operadores lógicos em Javascript
description: Entenda como usar && e || para deixar seu código mais enxuto.
tags: javascript,básico
---

Os operadores lógicos em *javascript* lidam com valores diferentes de *booleanos* de maneira peculiar - convertem o valor da esquerda pra *boolean* pra decidir o que fazer, porém dependendo do operador e do resultado da conversão, eles retornam o valor **original** da esquerda ou o da direita.

O operador **ou** `||` retorna o valor à esquerda caso o mesmo possa ser convertido para *true* e o da direita caso contrário:

```javascript
console.log(null || 'user')
// -> user
console.log('Nathalia' || 'user')
// -> Nathalia
```

É possível usar esta funcionalidade como um *fallback* para um valor padrão. Se você tem um valor que pode ficar vazio, você pode colocar após esse valor o `||` seguido de um valor *default* para substituir o valor vazio - se o valor inicial puder ser convertido para *false*, você recebe o valor substituto em seu lugar. As regras para conversão de *strings* e números para *booleanos* declaram que '0', 'NaN' e a *string* vazia `""` contam como **false**, enquanto quaisquer outros valores contam como **true**. Logo, `0 || -1` retorna `-1` e `"" || "!?"` retorna `"!?"`.

O operador `&&` funciona de maneira similar, mas ao contrário. Quando o valor à esquerda pode ser convertido para **false**, este valor é retornado; caso contrário, retorna o valor à direita.

Importante notar que a parte à direita só é avaliada quando necessário. No caso de `true || X`, não importa o que seja X - um número qualquer ou uma função que explode o computador - o resultado é **sempre** *true* e X **jamais** é sequer avaliado. O mesmo vale para `false && X`, que retorna *false* e X nunca é avaliado. Isso se chama *short-circuit evaluating*.