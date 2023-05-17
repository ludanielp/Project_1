//alert("Hola Mundo!")

function sayHello(){
    alert("hello")
}

function plus(){
    var input1 = Number(document.getElementById("text_1").value)
    var input2 = Number(document.getElementById("text_2").value)

    let result = input1 + input2;
    document.getElementById("result_1").innerHTML = `<b>= ${result}</b>`
    // console.log(result)
    // alert(result);

}

function ageFilter(){
    var name = document.getElementById("getName").value
    var lastname = document.getElementById("getLastName").value
    var age = document.getElementById("getAge").value

    if (age < 18)
        alert(`${name} ${lastname} Ruede durisimo, no votas!`)
    else
        alert(`${name} ${lastname} Bien! puedes beber romo y votar`)

}

function ageFilterLite(){
    var name = document.getElementById("getName").value
    var lastname = document.getElementById("getLastName").value
    var age = document.getElementById("getAge").value

    alert(`${name} ${lastname} ${age < 18? "Not old enough, no votas!": "Puedes beber romo y votar"}`)

}