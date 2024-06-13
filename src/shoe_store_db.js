const sequelize = require('./config/database');
const Product = require('./models/Product');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Product.bulkCreate([
        { name: 'Nike Air Force 1', price: 115.00, description: 'Description for Product 1', stock: 1 },
        { name: 'Samba OG Shoes', price: 100.00, description: 'Description for Product 2', stock: 1 },
        { name: 'Converse Chuck Taylor All Star High Top', price: 65, description: 'Description for Product 3', stock:1 },
        { name: 'New Balnce 550', price: 110, description: 'Description for Product 4', stock: 1 },
        { name: 'Nike Blazer Low 77 Vintage', price: 90, description: 'Description for Product 5', stock:1 }

    ]);

    process.exit();
};

seedDatabase();
