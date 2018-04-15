# DoubanMovie

使用的是 [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.需要先进行全局安装

 npm install -g @angular/cli@1.7.3

## 本地运行

先安装依赖模块 npm install

运行 ng server --open 自动打开 http://localhost:4200/

## 主要使用的是douban测试Api

1. 正在热映:
  https://api.douban.com/v2/movie/in_theaters

2. 最新的电影:
  https://api.douban.com/v2/movie/coming_soon

3. 电影详情:
  https://api.douban.com/v2/movie/subject

4. 电影搜索:
  https://api.douban.com/v2/movie/search

5. Top250:
  https://api.douban.com/v2/movie/top250 

##总结

angular2非常的便捷和模块化的思想很清晰，结构以component和service为主，directive的功能虽然没有angular1那么灵活了，但是使用上非常的清晰。

使用途中也遇到了不少的问题，如当时用angular-in-memory-web-api的时候，createDb中的返回名称必须和api/:collectionName保存一致，否则会报404的错误。

由于使用的是jsonp获取数据会出现，数据返回后界面没有更新的问题，所以必须使用 ChangeDetectionStrategy,  ChangeDetectorRef检查器，对其检查后才能正常渲染。
