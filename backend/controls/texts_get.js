//texts_get.js

const express = require('express');
const router = express.Router();

const db = require("../db.js")

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});
const GetTextByKeyword = async(req,res) =>
{
    const keyword = req.params.keyword;

    const keywordList = keyword.split(',').map(keyword => keyword.trim());
    //console.log(keywordList);
    // Construct the SQL query dynamically based on keywordList
    let sql = `
    SELECT file_Paths,
           ${keywordList.map((kw, index) => `
               SUM(CASE WHEN keywords LIKE CONCAT('%', ?, '%') THEN 1 ELSE 0 END) AS occurrences_${index}
           `).join(', ')}
    FROM textdata
    WHERE ${keywordList.map(() => 'keywords LIKE CONCAT(\'%\', ?, \'%\')').join(' OR ')}
    GROUP BY file_Paths`;
    const queryParams = keywordList.flatMap(kw => [kw]); // Duplicate each keyword for the occurrences

    // Duplicate each keyword for the SUM aggregation
    keywordList.forEach(kw => 
    {
        queryParams.push(kw);
    });
    // Execute the SQL query
    db.query(sql, queryParams, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while fetching data' });
            throw err;
        }
        let Occurences = []
        results.forEach(row => {
            // Access the file path
            const filePath = row.file_Paths;
            
            // Initialize total occurrences
            let totalOccurrences = 0;
            
            let foundKeywords = [];
            // Iterate over keywordList to calculate total occurrences
            keywordList.forEach((keyword, index) => {
                const occurrences = row[`occurrences_${index}`];
                totalOccurrences += occurrences; // Add occurrences to total
                if (occurrences > 0) {
                    foundKeywords.push(keyword);
                    foundKeywords.push(" ");
                }
            });
            console.log(foundKeywords)
            Occurences.push([`File Path: ${filePath}`, `Occurences: ${totalOccurrences}`, foundKeywords])
            
           
            // Print file path and total occurrences
            //console.log(`File Path: ${filePath}, Occurrences: ${totalOccurrences}`);
        });
        return res.json(Occurences);
    });

    
}


const GetText = async(req,res) =>
{
    const keywords = req.params.keyword;
    //console.log(keywords)
    const sql = 'SELECT primal_content FROM textdata WHERE keywords LIKE ?';
    db.query(sql, [`%${keywords}%`], (err,results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while fetching data' });
            throw err;
        }
        res.json(results);
    });
}
const GetContent = async(req, res) =>
{
    const keywords = req.params.keyword;
    const sql = 'SELECT content FROM textdata WHERE keywords LIKE ?';
    db.query(sql, [`%${keywords}%`], (err,results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while fetching data' });
            throw err;
        }
        res.json(results);
    });
}
module.exports = {GetTextByKeyword,GetText, GetContent, GetContent};
