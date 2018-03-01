import moment from 'moment'

export default (value, format = 'YYYY/MM/DD') => {
  return moment(value).format(format)
}
