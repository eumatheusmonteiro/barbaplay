export const WHATSAPP_NUMBER = '5524992811841'
export const WHATSAPP_MESSAGE = 'Olá! Vi o site do BarbaPlay e gostaria de solicitar meu teste grátis de até 6 horas.'
export function getWhatsAppLink(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
