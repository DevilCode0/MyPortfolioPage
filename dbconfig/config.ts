import mangoose from'mongoose';

export async function conict() {
    try {
        await mangoose.connect(process.env.MONGO_URI!)
        const connection = mangoose.connection;
        connection.on('connect', () => {
            console.log('conicted to MongoDB');
        });
        connection.on('error', (error) => {
            console.log('Error connecting to MongoDB', error);
            process.exit();
        });
    } catch (error) {
        console.log('Erro ao conectar', error);
    }
    
}