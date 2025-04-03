//xmlhttprequest -> fetch api
//fetch -return a promise

const Json_Placeholder_API = "https://jsonplaceholder.typicode.com/todos/";

// fetch(Json_Placeholder_API)
//   .then((response) => {
//     console.log("resolved", response); //parse the data using .json
//     return response.json(); //return a promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//use asyn and await

// const getTodos = async () => {
//   const response = await fetch(Json_Placeholder_API); //wait till prom resolves and gives value
//   const data = await response.json();
//   //   const response = await fetch(Json_Placeholder_API);
//   //   const data = await response.json();
//   //   const response = await fetch(Json_Placeholder_API);
//   //   const data = await response.json();
//   //   const response = await fetch(Json_Placeholder_API);
//   //   const data = await response.json();

//   console.log(data);
// };
// getTodos();
// // const test = getTodos();
// // console.log(test); //-is a promise

//err handling
const getTodos = async () => {
  const response = await fetch(Json_Placeholder_API); //wait till prom resolves and gives value
  if (response.status !== 200) {
    throw new Error("Cannot Fetch the data");
  }
  const data = await response.json();
  return data;
};
getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
