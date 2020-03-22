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
      datetime: {
        date: {
          day: '04',
          month: '02',
          year: '2020'
        },
        time: {
          hour: '16',
          minute: '37'
        }
      },
      locale: {
        place: 'CEE CENTRO',
        city: 'Rio De Janeiro',
        state: 'RJ'
      }
    },
    {
      status: 'Objeto saiu para entrega ao destinatário',
      datetime: {
        date: {
          day: '04',
          month: '02',
          year: '2020'
        },
        time: {
          hour: '11',
          minute: '38'
        }
      },
      locale: {
        place: 'CEE CENTRO',
        city: 'Rio De Janeiro',
        state: 'RJ'
      }
    },
    {
      status: 'Objeto encaminhado ',
      datetime: {
        date: {
          day: '02',
          month: '02',
          year: '2020'
        },
        time: {
          hour: '09',
          minute: '51'
        }
      },
      from: {
        place: 'CTE BENFICA',
        city: 'Rio De Janeiro',
        state: 'RJ'
      },
      to: {
        place: 'CEE CENTRO',
        city: 'Rio De Janeiro',
        state: 'RJ'
      }
    },
    {
      status: 'Objeto encaminhado ',
      datetime: {
        date: {
          day: '01',
          month: '02',
          year: '2020'
        },
        time: {
          hour: '10',
          minute: '57'
        }
      },
      from: {
        place: 'CTE BENFICA',
        city: 'Rio De Janeiro',
        state: 'RJ'
      },
      to: {
        place: 'CEE CENTRO',
        city: 'Rio De Janeiro',
        state: 'RJ'
      }
    },
    {
      status: 'Objeto encaminhado ',
      datetime: {
        date: {
          day: '31',
          month: '01',
          year: '2020'
        },
        time: {
          hour: '11',
          minute: '01'
        }
      },
      from: {
        place: 'CTCE CURITIBA',
        city: 'Curitiba',
        state: 'PR'
      },
      to: {
        place: 'CTE BENFICA',
        city: 'Rio De Janeiro',
        state: 'RJ'
      }
    },
    {
      status: 'Objeto encaminhado ',
      datetime: {
        date: {
          day: '30',
          month: '01',
          year: '2020'
        },
        time: {
          hour: '08',
          minute: '52'
        }
      },
      from: {
        place: 'AC ASSIS CHATEAUBRIAND',
        city: 'Assis Chateaubriand',
        state: 'PR'
      },
      to: {
        place: 'CTCE CURITIBA',
        city: 'Curitiba',
        state: 'PR'
      }
    },
    {
      status: 'Objeto postado após o horário limite da unidade',
      datetime: {
        date: {
          day: '29',
          month: '01',
          year: '2020'
        },
        time: {
          hour: '16',
          minute: '46'
        }
      },
      locale: {
        place: 'AC ASSIS CHATEAUBRIAND',
        city: 'Assis Chateaubriand',
        state: 'PR'
      }
    }
  ]
}
```