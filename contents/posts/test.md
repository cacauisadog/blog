---
title: "Testing frontmatter markdown loader"
description: "Just a simple, short description of what the text in this post is all about."
date: "2020-04-28"
---

## Oi mundo!

### Isso aqui tá ligado? Deu certo?
Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**. Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!** Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!** Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!** Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!** Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**
Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**

Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**

Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**Epa, parece que *sim*! Finalmenteeeeeee **é nóoooooooooisss!!**

```javascript
import blogsEn from '~/contents/en/blogsEn.js'
import blogsEs from '~/contents/es/blogsEs.js'

generate: {
  routes: [
    '/es', '404'
  ]
  .concat(blogsEn.map(blog => `/blog/${blog}`))
  .concat(blogsEs.map(blog => `es/blog/${blog}`))
}
```
> not guilty, he who does not feel me