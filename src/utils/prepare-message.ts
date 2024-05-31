export function prepareMessageWhatsapp({
  message,
  phone,
}: {
  message: string;
  phone: string;
}) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
