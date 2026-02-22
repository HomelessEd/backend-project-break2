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
   <div class="container">
      <h1>${title}</h1> ${content}
    </div>        
  </body>
  </html>`;
};

module.exports = baseHtml;