import { Category } from "../entities/Category";

export class CategoryMap {
  static toDTO({ id, name, slug, description, created_at, updated_at }: Category) {
    return {
      id,
      name,
      slug,
      description,
      created_at,
      updated_at
    }
  }
}
