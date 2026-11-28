const params = new URLSearchParams(window.location.search);

// Only count real submissions, not direct visits to review.html
if (params.has("product")) {
  const count = (Number(localStorage.getItem("reviewCount")) || 0) + 1;
  localStorage.setItem("reviewCount", count);

  document.querySelector("#reviewProduct").textContent = params.get("product");
  document.querySelector("#reviewRating").textContent = `${params.get("rating")} / 5`;

  // Remove the query string so a refresh doesn't count the review twice
  history.replaceState(null, "", "review.html");
}

document.querySelector("#reviewCount").textContent = localStorage.getItem("reviewCount") ?? 0;