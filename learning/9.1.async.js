console.log("test");

function getData() {
  const data = "data berhasil diambil";
  console.log(data);
}

function fetchDataWithTime() {
  setTimeout(getData, 2000);
}

fetchDataWithTime();
