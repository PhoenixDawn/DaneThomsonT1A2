const form = document.querySelector("form")
const btn = document.getElementById("button")

function handleSubmit(e){
    e.preventDefault()
    form.submit();
    form.reset();
    alert("Thank you for contacting me!")
}

btn.addEventListener("click", handleSubmit)
form.addEventListener("submit", handleSubmit)