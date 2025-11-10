// api/reviews.js
export default function handler(req, res) {
  // CORS (если читаешь с другого домена)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const reviews = [
    { id: 1, name: 'Иван', rating: 5, text: 'Отличная пилорама!' },
    { id: 2, name: 'Мария', rating: 4, text: 'Быстрая доставка, всё ок.' }
  ];

  res.status(200).json({ reviews });
}
