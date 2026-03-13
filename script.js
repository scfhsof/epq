const yearEl = document.getElementById("year");
const printBtn = document.getElementById("print-btn");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

if (printBtn) {
  printBtn.addEventListener("click", () => {
    window.print();
  });
}

function buildQuoteSearchUrl(bookTitle) {
  const query = `${bookTitle} 金句`;
  return `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
}

document.querySelectorAll(".js-quote-search").forEach((btn) => {
  btn.addEventListener("click", () => {
    const book = btn.getAttribute("data-book") || "";
    const url = buildQuoteSearchUrl(book.trim() || "书籍");
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

const revealEls = Array.from(document.querySelectorAll(".reveal"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

