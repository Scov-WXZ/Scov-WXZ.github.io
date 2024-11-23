document.addEventListener("DOMContentLoaded", function () {
  const mottoContainer = document.querySelector(".container-left-motto span");
  const strings = ["像好色一样好学", "愉悦", "忘却所有悲伤, 所见皆是奇迹"];
  let index = 0; // 字符串索引

  function typeString() {
    const string = strings[index];
    mottoContainer.textContent = ""; // 清空容器内容

    const typeInterval = setInterval(() => {
      if (mottoContainer.textContent.length < string.length) {
        mottoContainer.textContent += string[mottoContainer.textContent.length];
      } else {
        clearInterval(typeInterval);
        setTimeout(eraseString, 2000); // 擦除字符等待时间
      }
    }, 100); // 设置显示字符时间
  }

  function eraseString() {
    const eraseInterval = setInterval(() => {
      if (mottoContainer.textContent.length > 0) {
        mottoContainer.textContent = mottoContainer.textContent.slice(0, -1);
      } else {
        clearInterval(eraseInterval);
        index = (index + 1) % strings.length; // 切换到下一个字符串
        typeString(); // 开始显示下一个字符串
      }
    }, 100); // 设置擦除字符时间
  }

  typeString();
});

document.addEventListener("DOMContentLoaded", function () {
  var mainContent = document.querySelector(".container-main");
  var navContainer = document.querySelector(".container-right-nav");
  var headings = mainContent.querySelectorAll("h1, h2, h3, h4, h5, h6");

  var navHtml = "";

  headings.forEach(function (heading) {
    var id =
      heading.id || heading.textContent.toLowerCase().replace(/\s+/g, "-");
    heading.id = id; // Set the id if it wasn't already set
    var level = parseInt(heading.tagName.charAt(1));
    var indent = "&nbsp;".repeat((level - 1) * 2); // Indentation for nested headings
    navHtml += `<li><a href="#${id}">${indent}${heading.textContent}</a></li>`;
  });

  navContainer.innerHTML = navHtml;

  // Add smooth scrolling to anchor links
  document.querySelectorAll(".container-right-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
