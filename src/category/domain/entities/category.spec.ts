import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("construtor of category", () => {

   
    const created_at = new Date()
    const category: Category = new Category({
        name: "Movie",
        description: "some description",
        is_active: true,
        created_at
      });

      expect(category.props).toStrictEqual({
        name: "Movie",
        description: "some description",
        is_active: true,
        created_at
      })
   
    // expect(category.name).toBe("Movie");
    // expect(category.description).toBe("some description");
    // expect(category.is_active).toBeTruthy();
    // expect(category.created_at).toBe(created_at);
  });
});
