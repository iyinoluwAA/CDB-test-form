var allMembers = []

function submit() {
    // alert("Registered")
    var name = document.getElementById("name").value
    var skillData = document.getElementById("skillData").value
    var soft = document.getElementById("soft").value
    var hard = document.getElementById("hard").value

    if (name === '' || skillData === '' || soft === '' || hard === '') {
        // alert("I cannot be empty, I reject it")
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        var member = {
            name,
            skillData,
            soft,
            hard
        }
        allMembers.push(member)
        console.log(allMembers);

        show.innerHTML = `
            <tr>
                <td>S/N</td>
                <td>Name</td>
                <td>Skill Data</td>
                <td>Soft</td>
                <td>Hard</td>
                <td>Biography</td>
            </tr>
        `

        for(var i = 0; i < allMembers.length; i++) {
            show.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${allMembers[i].name}</td>
                    <td>${allMembers[i].skillData}</td>
                    <td>${allMembers[i].soft}</td>
                    <td>${allMembers[i].hard}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                        <button class="btn btn-warning">Edit</button>
                    </td>
                </tr>
            `
        }
    }
}