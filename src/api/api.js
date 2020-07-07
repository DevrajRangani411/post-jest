

  const URL = `https://jsonplaceholder.typicode.com/users`;

async function fetchData(){
                const response = await fetch(`${URL}`);
                const data = await response.json();
                if (response.status >= 400) {
                    throw new Error(data.errors);
                }
                console.log("API",data)
                return data;
            };

export {fetchData};