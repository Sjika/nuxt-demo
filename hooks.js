import open from 'opn';
export default {
  listen(server, { host, port }) {
    if (process.env.dev) {
      let protocol = process.env.ssh || "http";
      open(`${protocol}://${host}:${port}`);
    }
  }
}