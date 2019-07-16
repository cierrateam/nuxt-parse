export const createMiddleware = options => {
  return (req, res, next) => {
    res.writeHead(503, { 'Content-Type': 'text/html' })
    res.write('')
    res.end()
    return res.end()
  }
}
