$(function () {
  $("form").submit(async function (event) {
    event.preventDefault();

    const url = $("input[name='url']").val();
    const result = await axios.get(
      `https://url-shortner-h8in.onrender.com/get/endpoint?url=${url}`
    );

    $(".response > h3").text(result.data);

    console.log(result.data);
  });
});
