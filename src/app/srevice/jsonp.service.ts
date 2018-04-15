import { Injectable } from "@angular/core";

@Injectable()
export class httpService {
  private path: string = "https://api.douban.com/v2/movie/";
  constructor() {}
  getMovie(req): void {
    const { url = "", param = {}, success = () => {} } = req;
    const callbackName = `jsonp_${Math.random()
      .toString()
      .slice(2)}`;
    window[callbackName] = success;

    const link = Object.keys(param)
      .reduce((list, key) => {
        if (param[key]) {
          list.push(`${key}=${param[key]}&`);
        }
        return list;
      }, [])
      .join("");

    //返回的jsonp格式异常

    const script = window.document.createElement("script");
    script.src = `${this.path}${url}?${link}callback=${callbackName}`;
    window.document.body.appendChild(script);
  }
}
