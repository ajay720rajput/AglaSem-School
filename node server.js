/hbse-sample-paper
    /assets
        /css
            styles.css
        /js
            script.js
    index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HBSE Sample Papers - Class 12 Accountancy</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/js/script.js" defer></script>
</head>
<body>

    <!-- Header Section -->
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Class 12</a></li>
                <li><a href="#">Subjects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main>
        <section class="content">
            <h1>HBSE Class 12 Accountancy Sample Papers</h1>
            <p>Find the latest sample papers for Class 12 Accountancy below:</p>

            <!-- Sample Papers List -->
            <div class="sample-papers">
                <div class="sample-paper">
                    <h2>Sample Paper 2023</h2>
                    <a href="/path/to/sample-paper.pdf" class="download-link" target="_blank">Download PDF</a>
                </div>
                <div class="sample-paper">
                    <h2>Sample Paper 2022</h2>
                    <a href="/path/to/sample-paper.pdf" class="download-link" target="_blank">Download PDF</a>
                </div>
                <!-- Add more sample papers as needed -->
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 HBSE Sample Papers. All rights reserved.</p>
    </footer>

</body>
</html>
/* Basic styles for the website */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 10px;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
}

header nav ul li a:hover {
    background-color: #575757;
}

main {
    padding: 20px;
}

h1 {
    color: #333;
}

.sample-papers {
    display: flex;
    flex-wrap: wrap;
}

.sample-paper {
    background-color: white;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    width: 300px;
    text-align: center;
}

.download-link {
    color: #007BFF;
    text-decoration: none;
}

.download-link:hover {
    text-decoration: underline;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
// You can add JavaScript functionality here as needed
// For example, you could add a search filter for sample papers or other dynamic features
document.addEventListener('DOMContentLoaded', function() {
    console.log("HBSE Sample Paper Website Loaded!");
});
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy data for sample papers (Replace with database integration if necessary)
const samplePapers = [
    { year: '2023', filePath: '/path/to/sample-paper-2023.pdf' },
    { year: '2022', filePath: '/path/to/sample-paper-2022.pdf' },
];

// API to fetch sample papers
app.get('/api/sample-papers', (req, res) => {
    res.json(samplePapers);
});

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
