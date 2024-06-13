const sequelize = require('./config/database');
const Product = require('./models/Product');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Product.bulkCreate([
        { name: 'Product 1', price: 19.99, description: 'Description for Product 1', stock: 100 },
        { name: 'Product 2', price: 29.99, description: 'Description for Product 2', stock: 200 },
        // Add more products
    ]);

    process.exit();
};

seedDatabase();
