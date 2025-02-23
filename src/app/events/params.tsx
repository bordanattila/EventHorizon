import { connectToDatabase } from "../../lib/mongodb";
import Category from "../../models/Category";
// Define TypeScript interface for event categories
interface EventCategory {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  async function getPropsFromDatabase() {
    await connectToDatabase();
    // Get categories from database
    const categories = await Category.find({}, { _id: 0, __v: 0 }).lean(); // Exclude _id and lean it to return JS object
      // Transform data to match EventCategory structure
      const formattedCategories: EventCategory[] = categories.map((category) => ({
        id: category.id,
        title: category.title,
        description: category.description,
        image: category.image
      }));
  
    return { data: formattedCategories };
  }

export default getPropsFromDatabase;