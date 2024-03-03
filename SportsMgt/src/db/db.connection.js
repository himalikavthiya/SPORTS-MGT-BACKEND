const mongoose=require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb+srv://hemalipatel3997:8E40cw9pACCzltjZ@cluster0.p8t0wqz.mongodb.net/sports_mgt")
        .then((data) => {
            console.log('Database connection Successfully!');
        })
        .catch((error) => {
            console.log("Database connection error", error);
        });
}
module.exports = {
    connectDB
};