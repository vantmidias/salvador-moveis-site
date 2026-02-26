const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const outputFile = path.join(__dirname, 'src', 'data', 'portfolio.json');

function generatePortfolioData() {
    const categories = fs.readdirSync(portfolioDir)
        .filter((file) => {
            const isDir = fs.statSync(path.join(portfolioDir, file)).isDirectory();
            // Ignorar a pasta Logo nas galerias
            return isDir && file.toLowerCase() !== 'logo';
        })
        .sort((a, b) => {
            if (a.toLowerCase() === 'todos') return -1;
            if (b.toLowerCase() === 'todos') return 1;
            return a.localeCompare(b);
        });

    let idCounter = 1;
    const portfolioItems = [];

    categories.forEach((category) => {
        const categoryPath = path.join(portfolioDir, category);
        const files = fs.readdirSync(categoryPath).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        files.forEach((file) => {
            // Allow only images
            if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
                portfolioItems.push({
                    id: idCounter++,
                    category: category, // "Banheiros", "Cozinhas", etc
                    src: `/portfolio/${category}/${file}`,
                });
            }
        });
    });

    // Ensure data dir exists
    const dataDir = path.join(__dirname, 'src', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(portfolioItems, null, 2));
    console.log('Portfolio data generated at ' + outputFile);
}

generatePortfolioData();
