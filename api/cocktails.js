export default async function handler(req, res) {
    const apiUrl = 'https://app.nocodb.com/api/v1/db/data/v1/cocktails_xs_pack_csv';
    const token = 'jyNETgfoQagPelyErcVr7TDZdkgbxZZdG5DjLzQ'; // твой токен

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
