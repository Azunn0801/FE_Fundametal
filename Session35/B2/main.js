const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("show-modal");
const closeModalBtn = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const nameInput = document.getElementById("website-name");
const urlInput = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function showBookmarks() {
  bookmarksContainer.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    const div = document.createElement("div");
    div.className = "bookmark";
    div.innerHTML = `
      <span><strong>${bookmark.name}</strong></span>
      <span><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></span>
      <span class="delete-btn" onclick="deleteBookmark(${index})">✖</span>
    `;
    bookmarksContainer.appendChild(div);
  });
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  showBookmarks();
}

bookmarkForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  let url = urlInput.value.trim();
  if (!url.startsWith("http")) url = `https://${url}`;
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkForm.reset();
  modal.style.display = "none";
  showBookmarks();
});

showModalBtn.onclick = () => (modal.style.display = "block");
closeModalBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

showBookmarks();
