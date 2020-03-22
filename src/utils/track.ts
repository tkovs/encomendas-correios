export const getUrl = (code: string) => `https://www.linkcorreios.com.br/?id=${code}`

const extractDate = (value: string) => {
  const datetime = /(\d+)\/(\d+)\/(\d+).*?: (\d+):(\d+)/.exec(value)
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
    default:
      return {
        key,
        value,
      }
  }
}
