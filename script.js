
const nam = [];

document.getElementById("pushButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    console.clear();
    const newName = document.getElementById("push").value;
    if (nam.includes(newName)) {
        alert("Error: Username already exists");
    } else {
        nam.push(newName);
    }
    for (let i = 0; i < nam.length; i++) {
        console.log(nam[i]+"@gmail.com");
    }
});

