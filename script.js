function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => displayUsers(users))
    .catch((error) => {
      console.log("Error fetching users:", error);
      document.getElementById("userContainer").innerHTML =
        "<p style='grid-column: 1 / -1; text-align: center;'>Failed to load users</p>";
    });
}

function displayUsers(users) {
  const container = document.getElementById("userContainer");

  for (let i = 0; i < users.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const address =
      users[i].address.street +
      ", " +
      users[i].address.suite +
      ", " +
      users[i].address.city +
      ", " +
      users[i].address.zipcode;

    card.innerHTML =
      "<h2>" +
      users[i].name +
      "</h2>" +
      "<p class='email'>" +
      users[i].email +
      "</p>" +
      "<p>" +
      address +
      "</p>";

    container.appendChild(card);
  }
}

window.onload = fetchUsers;
