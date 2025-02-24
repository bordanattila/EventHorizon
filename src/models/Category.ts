import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
    id: string;
    title: string;
    description: string;
    image: string;
}

const CategorySchema = new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});


const CategoryModel = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);
export default CategoryModel;

