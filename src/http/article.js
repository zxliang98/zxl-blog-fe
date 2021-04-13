import instance from "./axios";
export const getArticleList = params => {
  return instance({
    url: "/article-list",
    methods: "get",
    params
  });
};

export const getArticle = params => {
  return instance({
    url: "/article",
    methods: "get",
    params
  });
};
