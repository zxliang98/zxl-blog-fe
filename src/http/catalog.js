import instance from "./axios";
export const getCatalog = params => {
  return instance({
    url: "/catalog-list",
    methods: "get",
    params
  });
};
