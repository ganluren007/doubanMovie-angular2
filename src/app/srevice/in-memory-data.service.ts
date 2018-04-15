import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const carosels = [
      {
        id: 0,
        link: "25824686",
        url: "assets/image/594b8a1b90b26.jpg",
        name: "变形金刚5",
        time: "2017-06-23(中国大陆) / 2017-06-21(美国)"
      },
      {
        id: 1,
        link: "25818101",
        url: "assets/image/58bcf5eccc3c7.jpg",
        name: "攻壳机动队",
        time: "2017-04-07(中国大陆) / 2017-03-29(法国) / 2017-03-31(美国)"
      },
      {
        id: 2,
        link: "25900945",
        url: "assets/image/58c6604224507.jpg",
        name: "美女与野兽",
        time: "2017-03-17(中国大陆/美国)"
      },
      {
        id: 3,
        link: "26839466",
        url: "assets/image/5914022cb10b9.jpg",
        name: "大雄的南极冰冰凉大冒险",
        time: "2017-05-30(中国大陆) / 2017-03-04(日本)"
      }
    ];
    return { carosels };
  }
}
