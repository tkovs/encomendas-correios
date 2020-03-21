import { track } from '../index';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('track', () => {
  it('should get the info about the code package', async () => {
    const statuses = [
      {
        Status: 'Objeto entregue ao destinatário',
        Data: '04/02/2020 | Hora: 11:38',
        Local: 'CEE CENTRO - Rio De Janeiro / RJ',
      },
    ];

    mockedAxios.get.mockResolvedValue({
      data: `
      <div>
        <div class="linha_status">
          <li>Status: ${statuses[0].Status}</li> 
          <li>Data: ${statuses[0].Data}</li> 
          <li>Local: ${statuses[0].Local}</li> 
        </div>
      </div>
      `,
    });

    const code = 'PW086958114BR';
    const response = await track(code);

    expect(response).toEqual(statuses);
  });
});
