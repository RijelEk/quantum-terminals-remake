export const createDatabase = async (
    user:string = "postgres", 
    host:string = "localhost", 
    password:string="", 
    port:number =5432, 
    dbName:string = "databasetest2"
) =>{
  const pgtools = require("pgtools");
  const config = {
    user: user,
    host: host,
    password: password,
    port: port
  };
  await pgtools.createdb(config, dbName, function(err:any, res:any) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log("[SUCCESS] Database " + dbName + "was successfully created! 🚀🚀🚀")
    console.log(res);
  });
}