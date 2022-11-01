import axios from "axios";
import toastr from "toastr";

const btnGetData = document.getElementById("btnGetData");
const result = document.getElementById("result");

const BASEURL = "https://localhost:7221";

btnGetData.addEventListener("click", function (event) {
  event.preventDefault();
  toastr.info("GETTING DATA FROM HTTP REQUEST");
  axios.get(`${BASEURL}/api/books`).then((response) => {
    // console.log(response.data);
    const resultData = response.data
      .map((el) => `<li>${el.title}</li>`)
      .join("\n");
    // console.log(resultData);
    result.innerHTML = resultData;
    toastr.success("Succefully fetched");
  });
  // .catch((error) => {
  //   console.log(error);
  //   toastr.error(error.message);
  // });
});
