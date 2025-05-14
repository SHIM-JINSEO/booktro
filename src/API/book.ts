import instance from "./instance";

const getBooksWithTpoic = async () => {
  return instance.get("/search.json").then((response) => response.data);
};

export default getBooksWithTpoic;