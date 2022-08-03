function showDog() {
  console.log("Hello Dogs!");
  axios.get("https://images.dog.ceo//breeds//bulldog-french//n02108915_4991.jpg").then(response => {
    console.log(response.data.message);
    document.querySelector("#dog-pic").src = 
  });
}
showDog();