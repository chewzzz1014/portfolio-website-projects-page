const projectData = [
    {
        name: 'HTML, CSS and JavaScript DOM Projects',
        icons: ['DiHtml5'],
        project: [
            {
                name: 'Etch-a-Sketch',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-1.png',
                desc: 'Paint on boxed canvas by hovering on them. Created using HTML, CSS and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/Etch-A-Sketch',
                pageLink: 'https://chewzzz-etch-a-sketch.netlify.app/',
            },
            {
                name: 'Color Generator',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-2.png',
                desc: 'Generate card with random colour. Created using HTML, Boostrap and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/color_generator',
                pageLink: 'https://chewzzz-color-generator.netlify.app/',
            },
            {
                name: 'Counter',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-3.png',
                desc: 'A simple responsive counter. Created using HTML, Boostrap and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/counter',
                pageLink: 'https://chewzzz-counter.netlify.app/',
            },
            {
                name: 'Leave Your Comment',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-4.png',
                desc: 'Create comment card using form inputs from user. Created using HTML, Boostrap and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/form_events',
                pageLink: 'https://chewzzz-form-events.netlify.app/',
            },
            {
                name: 'Jokes Generator',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-5.png',
                desc: 'Fetch random dad jokes from API using axios. Created using HTML and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/jokes_api',
            },
            {
                name: 'TV Show API',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-11.png',
                desc: 'Fetch TV shows by genres from API using axios. Created using HTML and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/tvShow_api',
                pageLink: 'https://chewzzz-tvshow-api.netlify.app/'
            },
            {
                name: 'Museum of Candy',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-6.png',
                desc: 'A responsive aesthetic website. Created using HTML, CSS and Boostrap.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/museum_of_candy',
                pageLink: 'https://chewzzz-museum-of-candy.netlify.app/'
            },
            {
                name: 'Pokemon Icons',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-7.png',
                desc: 'Generate 100 pokemon icons using JS DOM and Boostrap.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/pokemon_icon',
                pageLink: 'https://chewzzz-pokemon-icon.netlify.app/'
            },
            {
                name: 'Pricing Panel Clone',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/boostrap-2.png',
                desc: 'A responsive pricing panel clone. Created using HTML and CSS.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/pricing_panel',
                pageLink: 'https://chewzzz-pricing-panel.netlify.app/'
            },
            {
                name: 'Rock Paper Scissors',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page@ed5cd87d783affd025bd23da9d85a4d0513cab12/projects/src/images/js-8.png',
                desc: 'Rock, paper and scissors game. Created using HTML, CSS, Boostrap and JS Dom. One of projects for The Odin Project Web Development Course.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/rock_paper_scissors',
                pageLink: 'https://chewzzz-rock-paper-scissors.netlify.app/'
            },
            {
                name: 'Score Keeper',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page@23fb878b0b0daa768f5db8871b0f1c2dbf874009/projects/src/images/js-9.png',
                desc: 'A simple game score counter. Created using HTML, Bulma and JS Dom.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/score_keeper',
                pageLink: 'https://chewzzz-score-keeper.netlify.app/'
            },
            {
                name: 'Calculator',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page@23fb878b0b0daa768f5db8871b0f1c2dbf874009/projects/src/images/js-10.png',
                desc: 'A simple responsive calculator. Created using HTML, CSS, Boostrap and JS Dom. One of projects for The Odin Project Web Development Course.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/top_calculator',
                pageLink: 'https://chewzzz-top-calculator.netlify.app/'
            },
            {
                name: 'Recipe Page',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/js-12.png',
                desc: 'My first project of The Odin Project Web Development Course. Created using HTML, CSS and JS.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/top_recipe',
                pageLink: 'https://chewzzz-top-recipe.netlify.app/'
            },
            {
                name: 'Boostrap Form',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/boostrap-1.png',
                desc: 'Created a simple responsive boostrap form without CSS.',
                srcLink: 'https://github.com/chewzzz1014/css-javascript-projects/tree/master/bootstrap_form',
                pageLink: 'https://chewzzz-boostrap-form.netlify.app/',
            },
        ]
    },
    {
        name: 'React',
        icons: [''],
        project: [
            {
                name: 'Airbnb Clone',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-1.png',
                desc: 'Responsive airbnb clone. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/airbnb-clone',
                pageLink: 'https://chewzzz-airbnb-clone.netlify.app/',
            },
            {
                name: 'Digital Business Card',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-2.png',
                desc: 'Responsive personal business card. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/digital-business-card',
                pageLink: 'https://chewzzz-digital-business-card.netlify.app/',
            },
            {
                name: 'Meme Generator',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-3.png',
                desc: 'A fun meme generator with customised caption. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/meme-generator',
                pageLink: 'https://chewzzz-meme-generator.netlify.app/',
            },
            {
                name: 'Random Quote Machine',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-4.png',
                desc: 'Generate random positive quote with random background colour. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/random-quote-machine',
                pageLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/random-quote-machine',
            },
            {
                name: 'React Fact',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-5.png',
                desc: 'My first React project. A static React fact website with toggleable dark theme and light theme. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/react-form',
                pageLink: 'https://chewzzz-react-fact.netlify.app/',
            },
            {
                name: 'React Form',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-6.png',
                desc: 'Simple react form that displays user inputs. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/react-form',
                pageLink: 'https://chewzzz-react-form.netlify.app/',
            },
            {
                name: 'Rolling Dice',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-7.png',
                desc: 'A simple dices rolling game. Rolling dices until all dices are of same digit. Created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/tenzies-game',
                pageLink: 'https://chewzzz-rolling-dice.netlify.app/',
            },
            {
                name: 'Travel Journal',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/react-8.png',
                desc: 'Responsive travel location website created with React and CSS.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/travel-journal',
                pageLink: 'https://chewzzz-travel-journal.netlify.app/',
            },
        ]
        ]
    },
{
    name: 'Data Analyst Projects',
        icons: [''],
            project: [
                {
                    name: 'Anime Recommendations and Ratings',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-1.png',
                    desc: 'Perform EDA on anime recommendations dataset from Kaggle to determine which anime genre and anime type has highest rating using Pandas library.',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/blob/master/anime/anime.ipynb',
                    pageLink: '',
                    externalSite: 'Kaggle',
                    externalLink: 'https://www.kaggle.com/code/chewziqing/anime-data-set/notebook'
                },
                {
                    name: 'Netflix Original Films and IMDB Scores',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-2.png',
                    desc: 'Perform data cleaning, EDA and visualization on the movies IMDB Scores dataset from Kaggle using Pandas library. Course project for the course Data Analysis with Python: Zero to Pandas',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/blob/master/movies-imdb/project-imdb-score.ipynb',
                    pageLink: ''
                },
                {
                    name: 'Cryptocurrencies Prices Visulization',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-3.png',
                    desc: 'Visualize cryptocurrencies prices from public API and download them as Excel files using Pandas library.',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/blob/master/cryptocurrencies-prices/cryptocurrencies-prices.ipynb',
                    pageLink: ''
                },
                {
                    name: 'Mean Variance Standard Deviation Calculator',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-4.png',
                    desc: 'Calculate the mean, variance, standard deviation, max, min, and sum of the rows, columns, and elements in a 3 x 3 matrix. One of the graduation projects required for Data Analysis with Python course on Free Code Camp',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/tree/master/freeCodeCamp/Mean-Variance-Standard_Deviation_Calculator',
                    pageLink: ''
                },
                {
                    name: 'Demographic Data Analyzer',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-5.png',
                    desc: 'Extracting demographic information based on analysis on the given dataset using Pandas library. One of the graduation projects required for Data Analysis with Python course on Free Code Camp',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/tree/master/freeCodeCamp/Demographic-Data-Analyzer',
                    pageLink: ''
                },
                {
                    name: 'Medical Data Visualizer',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-6.png',
                    desc: 'Visualising and make calculations from medical examination data using Matplotlib, Seaborn, and Pandas library. One of the graduation projects required for Data Analysis with Python course on Free Code Camp',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/tree/master/freeCodeCamp/Medical-Data-Visualizer',
                    pageLink: ''
                },
                {
                    name: 'Pages View Time Series Visualizer',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/data-analyst-7.png',
                    desc: 'Visualize time series data of number of page views each day on the freeCodeCamp.org forum for a given period. One of the graduation projects required for Data Analysis with Python course on Free Code Camp',
                    srcLink: 'https://github.com/chewzzz1014/data-analysts-projects/tree/master/freeCodeCamp/Page-View-Time-Series-Visualizer',
                    pageLink: ''
                },
            ]
},
{
    name: 'UX Design Projects',
        icons: [''],
            project: [
                {
                    name: 'Trailer Browsing Mobile Application',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/UX-1.png',
                    desc: 'Low fidelity prototype for trailer browsing application using Figma.',
                    externalSite: 'Figma',
                    externalLink: 'https://www.figma.com/file/q7u1AzIBAAsm09CK6P8mgx/Trailer-Browsing-App?node-id=7%3A47&t=zCqP438nPFSGvimv-0',
                    demoLink: "https://www.figma.com/proto/q7u1AzIBAAsm09CK6P8mgx/Trailer-Browsing-App?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                },
                {
                    name: 'Online Courses Website',
                    imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/UX-2.png',
                    desc: 'Low fidelity prototype for online courses website using Figma. Interactive prototype in progress.',
                    externalSite: 'Figma',
                    externalLink: 'https://www.figma.com/file/ePtEO9qFBw5TdzRfaz8ZbF/Online-Courses?node-id=0%3A1&t=5FISyw4PJTsxB0DQ-0',
                    demoLink: "https://www.figma.com/proto/ePtEO9qFBw5TdzRfaz8ZbF/Online-Courses?node-id=22%3A109&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=22%3A109"
                },
            ]
},
]
export default projectData