export function validateEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase())
}

export function normalizePhone(value){
  return String(value).replace(/[^0-9+]/g,'')
}

