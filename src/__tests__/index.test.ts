import track from '../track'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('track', () => {
  it('should parse a page with info to correct object format', async () => {
    const statuses = [
      {
        status: 'Objeto entregue ao destinatário',
        datetime: {
          date: {
            day: '04',
            month: '02',
            year: '2020',
          },
          time: {
            hour: '11',
            minute: '38',
          },
        },
        locale: {
          place: 'CEE CENTRO',
          city: 'Rio De Janeiro',
          state: 'RJ',
        },
      },
    ]

    mockedAxios.get.mockResolvedValue({
      data: `
      <div class="singlepost">
        <div class="linha_status">
          <li>Status: Objeto entregue ao destinatário</li> 
          <li>Data: 04/02/2020 | Hora: 11:38</li> 
          <li>Local: CEE CENTRO - Rio De Janeiro / RJ</li> 
        </div>
      </div>
      `,
    })

    const code = 'PW086958114BR'
    const response = await track(code)

    expect(response).toEqual(statuses)
  })

  it('should parse a page without info to correct object format', async () => {
    const statuses: any[] = []

    mockedAxios.get.mockResolvedValue({
      data: `
      <div class="container">
        <p>O rastreamento não está disponível no momento:</p>
        <p>
          - Verifique se o código do objeto está correto;<br />
          - O objeto pode demorar até 24 horas (após postagem) para ser rastreado no sistema do Correios.
        </p>
      </div>
      `,
    })

    const code = 'PW086958114BR'
    const response = await track(code)

    expect(response).toEqual(statuses)
  })
})
