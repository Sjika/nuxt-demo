/**
 * 演示页面 - 中间件
 * @param {*} context 
 */
export default function ({ route, $axios }) {
  console.log("demo changed", route);
}