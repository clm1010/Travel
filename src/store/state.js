let defalultCity = '上海'

try {
  if (localStorage.city) {
    defalultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defalultCity
}
