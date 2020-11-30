let content = [
    `
    <h1> Idea </h1>
    <p> My idea for the project is to create an "Italian-American Virtual Museum" where I document some things about Italian American culture and history in web format. </p>
    
    <p>The way it will be like a "virtual museum" is that it will tell some of its stories through the use of interactive web elements (almost like an interactive display you might see at a museum)</p>
    `,
    `
    <h1>Design</h1>
    <div style="display:flex; width: 100%; justify-content: space-around;">
        <img src="main-design.png" style="width: 40%; height: 40%;">
        <img src="info-design.png" style="max-width: 40%; max-height: 80vh; ">
    </div>
    `,

    `
    <h1>Sitemap</h1>
    <p>
        <code style="text-align:left;">
        index.html -> pages.html?page=&lt;page-key&gt; <br> <br>

        &lt;page-key&gt; will be a URL parameter used to dynamically populate the page with information <br><br>

        Page Keys: <br>
        frank-sinatra<br>
        mass-migration<br>  
        </code>
    </p>
    `
]

let index = 0;

function reset_screen() {
    document.querySelector('main').innerHTML = content[index];
}

document.querySelector("#prev").addEventListener("click", () => {
    index = (index - 1)%content.length;
    reset_screen();
})

document.querySelector("#next").addEventListener("click", () => {
    index = (index + 1)%content.length;
    reset_screen();
})

reset_screen();