  function getStorage() {
    let users = [];

    if(localStorage.getItem("tableUsers")) {
      users = JSON.parse(localStorage.getItem("tableUsers")); // esta passando para JSON, e JSON é string
      return users;
    } else {
      return [];
    }
  }

  Users = getStorage()
