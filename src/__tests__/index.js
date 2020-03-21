import { track } from '../index'

describe('Track', () => {
  it('should mount the correct string with correct params', () => {
    const response = track('mockCode')
    expect(response).toEqual('Packet mockCode tracked. Thank you!')
  })
})