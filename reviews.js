export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const reviews = [
    {
      author: 'Иван П.',
      rating: 5,
      date: '2025-01-12',
      text: 'Покупал пилораму PilaTex, всё соответствует описанию. Быстрая доставка!',
      source: 'https://www.avito.ru/brands/i36146979/all'
    },
    {
      author: 'Сергей К.',
      rating: 5,
      date: '2025-01-08',
      text: 'Отличный продавец, помог подобрать нужную модель.',
      source: 'https://www.avito.ru/brands/i36146979/all'
    },
    {
      author: 'Андрей Т.',
      rating: 4,
      date: '2025-01-05',
      text: 'Пилорама работает хорошо, доставка чуть задержалась.',
      source: 'https://www.avito.ru/brands/i36146979/all'
    }
  ];

  res.status(200).json(reviews);
}