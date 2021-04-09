import instance from "./axios";
export const getArticleList = params => {
  return instance({
    url: "/article-list",
    methods: "get",
    params
  });
};
