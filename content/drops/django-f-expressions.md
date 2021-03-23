---
title: O que são e como usar F() expressions no Django
description: Entenda como as F() expressions podem otimizar suas queries no Django
tags: django,orm,dicas
---

A classe `F` é usada para referenciar os valores do atributo de um modelo e realizar operações de banco de dados usando os valores **sem tirá-los do banco e inserí-los na memória em Python**. Gera uma expressão em SQL que descreve a operação requisitada à nível de banco de dados.

Basicamente, isso significa que ela faz operações dentro do próprio banco, sem "arrancar" e jogar em memória pro Python.

Exemplo de uso comum, sem `F()`:

```python
# Evaristo publicou uma nova matéria!
reporter = Reporters.objects.get(name='Evaristo')
reporter.stories_filed += 1
reporter.save()
```

Fazendo desta maneira, "puxamos" o valor de `reporter.stories_filed` do banco para a memória e manipulamos seu valor utilizando operadores *Python*, depois salvamos o objeto de volta no banco.

A mesma operação, utilizando `F()`:

```python
from django.db.models import F

reporter = Reporter.objects.get(name='Evaristo')
reporter.stories_filed = F('stories_filed') + 1
reporter.save()
```

Apesar de a linha `reporter.stories_filed = F('stories_filed') + 1` parecer *Python* comum, na verdade é um construtor SQL descrevendo uma operação no banco.

Quando o Django encontra uma instância de `F()`, ele sobrescreve os operadores *Python* para criar uma expressão SQL encapsulada; no caso do exemplo, a expressão instrui ao banco incrementar o campo representado por `reporter.stories_filed`.

Não importa o valor que está ou estava em `reporter.stories_filed`, o *Python* **jamais toma conhecimento dele**, pois ele é **inteiramente lidado pelo banco de dados**. Tudo que o *Python* faz é, através da classe `F()` do *Django*, criar a sintaxe SQL para se referir ao campo e descrever a operação.

Para acessar o novo valor que foi salvo desta maneira, o objeto precisa ser recarregado:

```python
reporter = Reporters.objects.get(pk=reporter.pk)
# Ou, mais sucintamente
reporter.refresh_from_db()
```

`F()` também pode ser usado em conjunto com *QuerySets* de instâncias de objetos, com `update():`

```python
reporter = Reporters.objects.filter(name='Tintin')
reporter.update(stories_filed=F('stories_filed') + 1)
```

É possível também atualizar múltiplos objetos, tornando o procedimento muito mais rápido do que puxar todos para o *Python* do banco, fazer um *loop*, incrementar cada um e depois salvar cada um de volta ao banco:

```python
Reporter.objects.all().update(stories_filed=F('stories_filed') + 1)
```

Desta forma, usar `F()` pode oferecer vantagens de performance como:

- fazer com que o banco, e não o *Python*, faça o trabalho sujo;
- reduz o número de *queries* que algumas operações podem precisar.

## Observações

### Evitar condições de corrida com `F()`

Se duas *threads* do *Python* executarem o código no primeiro exemplo, uma delas poderia pegar, incrementar e salvar o valor do campo depois que outra já a pegou do banco. O valor que a segunda *thread* salva será baseado no valor original, ou seja, o trabalho da primeira será perdido.

Já se o banco ficar responsável por atualizar o valor do campo, o processo é mais robusto: ele só atualizará o campo baseado no valor do campo no banco quando `save()` ou `update()` é executado, ao invés de ser baseado no valor de quando a instância foi buscada.

### Atribuições com `F()` persistem após o `save()`

Objetos `F()` atribuídos a campos de *models* persistem após o salvamento do *model* e são aplicados em cada `save()`. Por exemplo:

```python
# suponha que stories_filed possui valor 1
reporter = Reporters.objects.get(name='Tintin')
reporter.stories_filed = F('stories_filed') + 1
reporter.save() # aqui possuirá valor 2

reporter.name = 'Tintin Jr.'
reporter.save() # aqui possuirá valor 3

```

Essa persistência pode ser evitada recarregando o objeto do *model* após o salvamento (usando, por exemplo, `reporter.refresh_from_db()`).

### Usando `F()` em *filters*

`F()` torna possível filtrar um conjunto de objetos utilizando critérios baseados nos valores dos campos, ao invés de nos valores do *Python*. [Saca só a documentação.](https://docs.djangoproject.com/en/3.0/topics/db/queries/#using-f-expressions-in-filters)

## Conclusão

Neste *drops* vimos como o bom uso das *F expressions* pode facilitar o entendimento do código e otimizar o número de *queries* necessárias para executar determinadas operações no banco. Quando nossas aplicações crescem, a tendência é o primeiro ponto de falha ser o banco, já que no começo é comum não se importar tanto com a eficiência das consultas, mas é importantíssimo mantê-las otimizadas no longo prazo. A saúde do seu banco de dados agradece.