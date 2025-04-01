export default async function handler(req, res) {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    const {message} = req.body || {};

    const textMessage = message
        ? `Нове замовлення від Аделіни)\nЗаписочка: ${message}`
        : "У тебе замовлення від Аделіни)";

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(textMessage)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
