import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";


// z.infer brins every field from the type 
export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
};