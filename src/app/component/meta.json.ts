export class Nav {
  link: string;
  label: string;
}

export const param = {
  logo: {
    link: "/home",
    url: "assets/image/doubanLOGO.png"
  },
  search: {
    placeholder: "电影搜索",
    value: "",
    link: "/search"
  },
  btn: {
    label: "搜索"
  },
  navList: [
    {
      link: "/home",
      label: "首页"
    },
    {
      link: "/in_theaters",
      label: "正在热映"
    },
    {
      link: "/coming_soon",
      label: "即将上映"
    },
    {
      link: "/top250",
      label: "Top250"
    }
  ],
  footer: {
    label: "版权所有",
    name: "supercell_t"
  }
};
