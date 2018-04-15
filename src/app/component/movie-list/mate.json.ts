export default {
  loadingState: true,
  movieList: {
    data: [],
    type: "类型:"
  },
  page: {
    total: 0,
    pageSize: 10,
    pageCount: 0,
    pageIndex: 1,
    text: {
      label1: "总共：",
      label2: "条记录  第",
      label3: "页"
    }
  },
  btns: {
    first: {
      label: "上一页",
      disabled: false
    },
    next: {
      label: "下一页",
      disabled: false
    }
  }
};
