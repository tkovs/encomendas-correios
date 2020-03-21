import { track } from '../index'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('track', () => {
  it('should get the info about the code package', async () => {
    const statuses = [
      {
        status: 'Objeto entregue ao destinatário',
        data: '04/02/2020 | Hora: 11:38',
        local: 'CEE CENTRO - Rio De Janeiro / RJ',
      },
    ]

    mockedAxios.get.mockResolvedValue({
      data: `
      <div>
        <div class="linha_status">
          <li>Status: ${statuses[0].status}</li> 
          <li>Data: ${statuses[0].data}</li> 
          <li>Local: ${statuses[0].local}</li> 
        </div>
      </div>
      `,
    })

    const code = 'PW086958114BR'
    const response = await track(code)

    expect(response).toEqual(statuses)
  })
})
