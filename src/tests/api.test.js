describe("Get the star war movies", () => {
  it("should return all the movies", async () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        expect(data.status).toEqual(200);
      });
  });
});
