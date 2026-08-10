const users = [
  {
    email: "john@gmail.com",
    password: "12345",
    username: "John",

    rank: "Radiant",
    gamesPlayed: 342,
    winRate: "52%",
    wins: 178,
    losses: 164,
    kd: "1.15",
    kills: "4,210",
    deaths: "3,660",
    assists: "1,850",
    favouriteWeapon: "Vandal",
    favouriteMap: "Neo City",
  },

  {
    email: "ethan@gmail.com",
    password: "123",
    username: "Ethan",

    rank: "Diamond",
    gamesPlayed: 215,
    winRate: "61%",
    wins: 131,
    losses: 84,
    kd: "1.32",
    kills: "3,150",
    deaths: "2,380",
    assists: "1,420",
    favouriteWeapon: "Phantom",
    favouriteMap: "Frost Peak",
  },
];

// ===============================
// LOGIN
// ===============================

const loginSubmit = document.getElementById("loginSubmit");

if (loginSubmit) {
  loginSubmit.addEventListener("click", loginUser);
}

function loginUser() {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const message = document.getElementById("loginMessage");

  const user = users.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (user) {
    // Save ONLY the username
    localStorage.setItem("username", user.username);

    message.style.color = "lime";

    message.textContent = "Login successful!";

    showLoggedInUser();

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal"),
    );

    modal.hide();

    // Update account information on the page
    displayAccountInformation();
  } else {
    message.style.color = "red";

    message.textContent = "Incorrect email or password.";
  }
}

// ===============================
// SHOW LOGGED-IN USER IN NAVBAR
// ===============================

function showLoggedInUser() {
  const username = localStorage.getItem("username");

  if (!username) {
    return;
  }

  const loginArea = document.getElementById("loginArea");

  if (!loginArea) {
    return;
  }

  loginArea.innerHTML = `

        <div class="dropdown">

            <button
                class="login btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown">

                ${username}

            </button>

            <ul class="dropdown-menu dropdown-menu-end">

                <li>
                    <a
                        class="dropdown-item"
                        href="../Pages/Nate pg11 AccStats.html">

                        Account Stats

                    </a>
                </li>

                <li>
                    <a
                        class="dropdown-item"
                        href="../Pages/Nate pg10 Code Redeem.html">

                        Redeem Code

                    </a>
                </li>

                <li>
                    <hr class="dropdown-divider">
                </li>

                <li>
                    <a
                        class="dropdown-item"
                        href="#"
                        id="logoutBtn">

                        Logout

                    </a>
                </li>

            </ul>

        </div>

    `;

  document.getElementById("logoutBtn").addEventListener("click", logoutUser);
}

// ===============================
// LOGOUT
// ===============================

function logoutUser() {
  localStorage.removeItem("username");

  location.reload();
}

// ===============================
// DISPLAY ACCOUNT INFORMATION
// ===============================

function displayAccountInformation() {
  const username = localStorage.getItem("username");

  if (!username) {
    return;
  }

  const user = users.find(function (u) {
    return u.username === username;
  });

  if (!user) {
    return;
  }

  // Account name
  const accountName = document.getElementById("accountName");

  if (accountName) {
    accountName.textContent = user.username;
  }

  // Rank
  const rank = document.getElementById("rank");

  if (rank) {
    rank.textContent = user.rank;
  }

  // Games played
  const gamesPlayed = document.getElementById("gamesPlayed");

  if (gamesPlayed) {
    gamesPlayed.textContent = user.gamesPlayed;
  }

  // Win rate
  const winRate = document.getElementById("winRate");

  if (winRate) {
    winRate.textContent = user.winRate;
  }

  // Wins
  const wins = document.getElementById("wins");

  if (wins) {
    wins.textContent = user.wins;
  }

  // Losses
  const losses = document.getElementById("losses");

  if (losses) {
    losses.textContent = user.losses;
  }

  // K/D
  const kd = document.getElementById("kd");

  if (kd) {
    kd.textContent = user.kd;
  }

  // Kills
  const kills = document.getElementById("kills");

  if (kills) {
    kills.textContent = user.kills;
  }

  // Deaths
  const deaths = document.getElementById("deaths");

  if (deaths) {
    deaths.textContent = user.deaths;
  }

  // Assists
  const assists = document.getElementById("assists");

  if (assists) {
    assists.textContent = user.assists;
  }

  // Favourite weapon
  const favouriteWeapon = document.getElementById("favouriteWeapon");

  if (favouriteWeapon) {
    favouriteWeapon.textContent = user.favouriteWeapon;
  }

  // Favourite map
  const favouriteMap = document.getElementById("favouriteMap");

  if (favouriteMap) {
    favouriteMap.textContent = user.favouriteMap;
  }
}

// ===============================
// RUN WHEN PAGE LOADS
// ===============================

showLoggedInUser();

displayAccountInformation();
