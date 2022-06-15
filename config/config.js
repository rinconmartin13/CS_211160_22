import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

export const db = {
  user: data.parsed.USER,
  host: data.parsed.HOST,
  database: data.parsed.DATABASE,
  password: data.parsed.PASSWORD,
};

export const api = {
  port: data.parsed.PORT,
};

// export const api = {
//     port: process.env.API_PORT || 4000
// };
// // export const db = {
// //     user: 'kslxxnahrlgiat',
// //     host: 'ec2-52-72-99-110.compute-1.amazonaws.com',
// //     database: 'd9gjebmg636g9q',
// //     password: '8fa68ad3c7e20a116b518755bcbd70ba95b17e2abeaadb4caca7997172fabf20',
// //     port: '5432'
// // };
// export const db = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'CSDB',
//     password: '12345',
//     port: '5432'
// };

// export const api ={
//     port: data.parsed.PORT,
// }
