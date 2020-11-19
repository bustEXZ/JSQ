const app = require('express')()

app.use((req, res) => {
  res.setHeader('X-Frame-Options', 'sameorigin')
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self';")
  res.setHeader('Accept-Encoding', 'gzip, compress, br')
  res.sendFile(__dirname + decodeURIComponent(req.url))
})

app.listen(process.env.PORT || 3000)
