import { Product } from "./product";
import { User } from "./user";

export interface Cart {
    user:User,
    cartProduct: Product[]
}
