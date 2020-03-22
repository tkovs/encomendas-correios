import track from './track'

track('PW086958114BR').then(data => console.log({ data: JSON.stringify(data) }))

export default {
  track,
}
