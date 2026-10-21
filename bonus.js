
const http = require('http');

const firstName = 'Obora';
const recipe = 'Obora Oatmeal';

const ingredients = [
    { name: 'Oats', amount: 1, unit: 'cup' },
    { name: 'Milk', amount: 2, unit: 'cups' },
    { name: 'Honey', amount: 1, unit: 'tablespoon' },
    { name: 'Banana', amount: 1, unit: 'piece' }
];

const server = http.createServer((req, res) => {
    const randomIndex = Math.floor(Math.random() * ingredients.length);
    const unusedIngredient = ingredients[randomIndex];
    const usedIngredients = ingredients.filter(
        (item, index) => index !== randomIndex
    );

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${recipe}</title>
        </head>
        <body>
            <h1>${recipe}</h1>
            <div>
                <p>First name: ${firstName}</p>
                <p>Recipe: ${recipe}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${usedIngredients.map(item =>
                        `<li>${item.name}: ${item.amount} ${item.unit}</li>`
                    ).join('')}
                </ul>
                <p>Random value: ${randomIndex}</p>
                <p>Ingredient not used: ${unusedIngredient.name}</p>
            </div>
        </body>
        </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(3002, '127.0.0.1', () => {
    console.log('Bonus server running at http://127.0.0.1:3002/');
});
