export default async function handler(req, res) {
  const apiUrl = 'https://app.nocodb.com/api/v1/db/data/v1/Bar_lh/cocktails_xs_pack_csv';
  const token = 'jyNETGfqOagPeIyErcVr7TZDdzkgbxZ2dGSDjLzQ';

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'xc-token': token,
      },
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных', error: error.message });
  }
}
