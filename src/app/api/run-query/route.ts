// // app/api/run-query/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import mysql from "mysql2/promise";

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "your_database",
// };

// export async function POST(request: NextRequest) {
//   const { query } = await request.json();

//   try {
//     const connection = await mysql.createConnection(dbConfig);
//     const [results] = await connection.execute(query);
//     await connection.end();
//     return NextResponse.json(results);
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
