function openModal(modalId) {
              document.getElementById(modalId).style.display = "block";
            }

            function closeModal(modalId) {
              document.getElementById(modalId).style.display = "none";
            }

            window.onclick = function(event) {
              let modals = document.querySelectorAll(".modal");
              modals.forEach(modal => {
                if (event.target === modal) {
                  modal.style.display = "none";
                }
              });
            };

            document.querySelector("#signup-modal .auth-btn").addEventListener("click", () => {
              let email = document.querySelector("#signup-modal input[type='email']").value.trim();
              let pass = document.querySelector("#signup-modal input[type='password']").value.trim();
              let users = localStorage.getItem("users") || "";

              if (!email || !pass) return alert("❌ Fill in all fields.");
              if (users.includes(`${email}:`)) return alert("⚠️ Already registered.");

              localStorage.setItem("users", users + `${email}:${pass};`);
              alert("✅ Registered!");
              closeModal("signup-modal");
            });

            document.querySelector("#login-button").addEventListener("click", () => {
              let email = document.querySelector("#login-email").value.trim();
              let pass = document.querySelector("#login-password").value.trim();
              let users = (localStorage.getItem("users") || "").split(";");

              for (let user of users) {
                if (user === `${email}:${pass}`) {
                  document.getElementById("intro").textContent = `Feel free to check out Allen's Resume, ${email}!`;
                  closeModal("login-modal");

                  // ✅ Unblur all content
                  let content = document.getElementById("main-content");
                  content.classList.remove("blurred");
                  content.classList.add("unblurred");
                  return;
                }
              }
              alert("❌ Invalid login.");
            });