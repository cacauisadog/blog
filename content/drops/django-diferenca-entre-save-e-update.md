---
title: A diferença entre save() e update() no Django
description: Quando usar o método save() e quando usar o método update() da ORM
tags: django,orm,dicas
---

Caso seja necessário apenas atualizar uma entrada e não fazer mais nada com o objeto do *model*, o mais eficiente é chamar `update()` ao invés de carregar o objeto na memória. Por exemplo, ao invés de fazer isso:

```python
e = Entry.objects.get(id=9)
e.atributo = 'Novo valor'
e.save()
```

**Este aqui é mais eficiente:**

```python
Entry.objects.filter(id=10).update(atributo='Novo valor')
```

**Importante:** o método `update()` funciona para **querysets** e não para objetos "soltos" (retorno de `objects.get`, por exemplo). Em casos de já ter o objeto do modelo em mãos, faz mais sentido usar o `save()` mesmo.
Usar `update()` também evita uma condição de corrida onde algo pode acontecer no seu banco no curto período de tempo entre carregar o objeto e chamar o método `save()`.

**Importante**: usar `update()` atualiza o objeto **a nível de SQL**, ou seja, não chama nenhum método `save()` nos seus modelos, nem emite signals de `pre_save` ou `post_save` (pois estes são consequências de se chamar `Model.save()`). Se for para atualizar uma série de objetos de um modelo que possui um método `save()` customizado, o melhor a se fazer é usar um loop e chamar o método `save()` em cada objeto, como abaixo:

```python
for e in Entry.objects.filter(atributo=valor):
  e.atributo = novo_valor
  e.save()
```