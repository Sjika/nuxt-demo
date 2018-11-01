import open from 'opn';
export default {
  listen(server, { host, port }) {
    let protocol = process.env.ssh ? "https" : "http";
    open(`${protocol}://${host}:${port}`);
  }
}