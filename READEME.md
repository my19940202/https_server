# 本地fake 一个简单的https服务

- 生成本机密钥
openssl req -nodes -new -x509 -keyout server.key -out server.cert

- install express
npm i express -d

- run server
node https.server.js

> 背景：接了一个前端后没有分离的后端管理系统，前端代码和后端代码结合
> 需要修改一点内容，commit push 到线上，直接线上(线上https的环境)看效果（环境本地部署相对麻烦涉及 mysql redis等）
> 不过前端修改这样修改效率太低，chrome SwitcherooRedirector插件转发替换对应js(实现本地修改 直接线上预览)

