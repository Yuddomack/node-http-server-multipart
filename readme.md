# node http server multipart example

a simple example for node http receiving multipart request

### why?

For study 'How to process multipart data at the raw level' (without framework or library)

### run server (on [localhost:8082](http://localhost:8082))

```
$ node app.js
```

### key points

- app.js
  - data streaming from http request
- utils/multipartParser.js
  - parse from data chunks to binary (like [multer](https://github.com/expressjs/multer))
- routes.js
  - then, here is business logic

### ref

[https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
