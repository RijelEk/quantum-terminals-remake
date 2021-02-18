

export const getIp = async () => {
  let ip;
  fetch("https://api.ipdata.co")
  .then(response => {
    ip = response.json();
   })

  .catch(err => console.error(err))
  
  return ip;
}