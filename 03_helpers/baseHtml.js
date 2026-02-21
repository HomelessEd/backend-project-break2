const baseHtml = (title, nav, content) => {
 return `
  <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    ${nav} 
    <main>
        ${content}
    </main>
  </body>
  </html>`;
};

module.exports = baseHtml;