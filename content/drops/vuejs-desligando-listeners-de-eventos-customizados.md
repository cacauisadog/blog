---
title: Desligando listeners de eventos customizados no Vue.js
description: Entenda como e por quê desligar os listeners dos seus eventos customizados
tags: vuejs,dicas
references: https://vuejs.org/v2/api/#vm-off
---

Ao usar emissores globais de evento, como um `EventBus` ou o objeto `$nuxt`, e criar um *listener* em algum componente no hook `created()` ou `mounted()`, é necessário depois de "ligar" o listener "desligá-lo" manualmente antes de destruir (hook `beforeDestroy()`) ou ao destruir (hook `destroyed()`) o componente que criou o *listener* também, pois **o listener não deixa de existir na VM do Vue**. Isso pode dar problemas de eventos disparando quando não devem, prejudicando a experiência e a performance.

```javascript
export default {
	//...
	methods: {
		fazAlgo () {
			// faz algo
		}
	},
	mounted () {
		this.$nuxt.$on('meu-evento', this.fazAlgo) //note que aqui vai a função sem parênteses, ou seja, uma referência para a função, não a execução da função
	},
	destroyed () {
		this.$nuxt.$off('meu-evento', this.fazAlgo)
	}
}
```

É importante passar tanto o nome do evento quanto o *callback*, pois coisas diferentes acontecem:

- sem nenhum argumento (no exemplo, apenas `this.$nuxt.$off`): **todos** os *event listeners*  são removidos;
- com apenas o nome do evento: remove todos os *listeners* **daquele evento**. Isso quebra o comportamento de quaisquer outros componentes vivos no momento em que esse componente é destruído que dependam do evento;
- com nome do evento e callback: remove o *listener* apenas para aquele *callback* específico.