### Encomendas Correios

API de rastreio de encomendas do Correios

### Examples

```js
import { track } from 'encomendas-correios'

track('PW086958114BR')
  .then(data => console.log({ data }))
```

```js
{
  data: [
    {
      status: 'Objeto entregue ao destinatário',
      data: '04/02/2020 | Hora: 16:37',
      local: 'CEE CENTRO - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto entregue ao destinatário',
      data: '04/02/2020 | Hora: 16:37',
      local: 'CEE CENTRO - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto saiu para entrega ao destinatário',
      data: '04/02/2020 | Hora: 11:38',
      local: 'CEE CENTRO - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto encaminhado ',
      data: '02/02/2020 | Hora: 09:51',
      origem: 'CTE BENFICA - Rio De Janeiro / RJ',
      destino: 'CEE CENTRO - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto encaminhado ',
      data: '01/02/2020 | Hora: 10:57',
      origem: 'CTE BENFICA - Rio De Janeiro / RJ',
      destino: 'CEE CENTRO - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto encaminhado ',
      data: '31/01/2020 | Hora: 11:01',
      origem: 'CTCE CURITIBA - Curitiba / PR',
      destino: 'CTE BENFICA - Rio De Janeiro / RJ'
    },
    {
      status: 'Objeto encaminhado ',
      data: '30/01/2020 | Hora: 08:52',
      origem: 'AC ASSIS CHATEAUBRIAND - Assis Chateaubriand / PR',
      destino: 'CTCE CURITIBA - Curitiba / PR'
    },
    {
      status: 'Objeto postado após o horário limite da unidade',
      data: '29/01/2020 | Hora: 16:46',
      local: 'AC ASSIS CHATEAUBRIAND - Assis Chateaubriand / PR'
    }
  ]
}
```