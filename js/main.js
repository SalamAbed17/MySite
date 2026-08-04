const posts = [
  {
    title: "مرحبًا بك في موقعي",
    content: `
هذا الموقع هو مساحة شخصية أنشر فيها مقالات وصور وتسجيلات صوتية وفيديو وملفات متنوعة.
الهدف هو مشاركة المعرفة والتجارب بطريقة بسيطة وسهلة الوصول للجميع.
    `
  },
  {
    title: "لماذا اخترت HTML + CSS + JavaScript؟",
    content: `
هذه التقنيات الثلاث هي أساس الويب وتسمح ببناء مواقع سريعة وخفيفة ومتوافقة مع GitHub Pages وCloudflare.
كما أنها لا تحتاج خادم خلفي، مما يجعل الموقع أكثر أمانًا وأقل تكلفة.
    `
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("posts");

  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";

    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;

    const content = document.createElement("p");
    content.className = "post-content";
    content.textContent = post.content;

    card.appendChild(title);
    card.appendChild(content);
    container.appendChild(card);
  });
});
