export const getUrl = (code: string) => `https://www.linkcorreios.com.br/?id=${code}`

const extractLocale = (value: string) => {
  const regex = /(.*) - (.*) \/ (.*)/
  const locales = regex.exec(value)

  if (!locales) {
    return
  }

  return {
    place: locales[1],
    city: locales[2],
    state: locales[3],
  }
}

const extractDate = (value: string) => {
  const regex = /(\d+)\/(\d+)\/(\d+).*?: (\d+):(\d+)/
  const datetime = regex.exec(value)

  if (!datetime) {
    return {}
  }

  const date = {
    day: datetime[1],
    month: datetime[2],
    year: datetime[3],
  }
  const time = {
    hour: datetime[4],
    minute: datetime[5],
  }

  return {
    date,
    time,
  }
}

export const buildElement = (key: string, value: string) => {
  switch (key) {
    case 'data':
      return {
        key: 'datetime',
        value: extractDate(value),
      }
    case 'origem':
      return {
        key: 'from',
        value: extractLocale(value),
      }
    case 'destino':
      return {
        key: 'to',
        value: extractLocale(value),
      }
    case 'local':
      return {
        key: 'locale',
        value: extractLocale(value),
      }
    default:
      return {
        key,
        value,
      }
  }
}
