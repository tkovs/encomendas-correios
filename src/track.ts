import cheerio from 'cheerio'
import axios from 'axios'

import { getUrl, buildElement } from './utils/track'

const track = async (code: string) => {
  const response = await axios.get(getUrl(code))
  const { data } = response
  const html = cheerio.load(data)
  const final: any[] = []

  html('.singlepost .linha_status').each((_i, statusElement) => {
    const object: any = {}

    html(statusElement)
      .find('li')
      .each((_j, infoElement) => {
        const text = html(infoElement).text()
        const key = /^\w+/.exec(text)
        const match = /:\s*(.*)$/.exec(text)

        if (!match || !key) {
          return
        }

        const value = match[1]

        const element = buildElement(key[0].toLowerCase(), value)
        if (element) {
          object[element.key] = element.value
        }
      })

    final.push(object)
  })

  return final
}

export default track
