import tailwindProject from "./tailwind-project"
import cssJsProjects from "./css-js-projects"
import reactProjects from "./react-projects"

const projectData = [
    tailwindProject,
    cssJsProjects,
    reactProjects,
    {
        name: 'Express',
        icons: [],
        project: [
            {
                name: 'Exercise Tracker',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/express-1.png',
                desc: 'Make ',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/Exercise-Tracker',
                pageLink: '',
                specialTxt: 'Deployment in Progress!'
            },
            {
                name: 'File Metadata Microservice',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page@edf37b82f0882546aa161cf4a3cd474334c3d19e/projects/src/images/express-2.png',
                desc: '',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/File-Metadata-Microservice',
                pageLink: '',
                specialTxt: 'Deployment in Progress!'
            },
            {
                name: 'Request Header Parser Microservice',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/express-3.png',
                desc: '',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/Request-Header-Parser-Microservice',
                pageLink: '',
                specialTxt: 'Deployment in Progress!',
            },
            {
                name: 'Timestamp Microservice',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/express-4.png',
                desc: '',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/Timestamp-Microservice',
                pageLink: '',
                specialTxt: 'Deployment in Progress!'
            },
            {
                name: 'URL Shortener Microservice',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/express-5.png',
                desc: '',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/URL-Shortener-Microservice',
                pageLink: '',
                specialTxt: 'Deployment in Progress!'
            },
            {
                name: 'Node Passport Authentication',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/express-6.png',
                desc: '',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/node-passport-authentication',
                pageLink: '',
                specialTxt: 'Deployment in Progress!'
            },
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
    {
        name: 'Full Stack open 2022 Course by University of Helsinki MOOC Center',
        icons: [''],
        project: [
            {
                name: 'Online Courses Website',
                imgLink: 'https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website-projects-page/projects/src/images/UX-2.png',
                desc: 'Low fidelity prototype for online courses website using Figma. Interactive prototype in progress.',
                srcLink: 'https://github.com/chewzzz1014/JS-Frameworks-Projects/tree/master/expense-tracker',
                pageLink: 'https://chewzzz-expense-tracker-react.netlify.app/'
            },
        ]
    },
]
export default projectData