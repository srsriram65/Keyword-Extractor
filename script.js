function extractKeywords() {

    let text = document.getElementById("textInput").value;

    let stopWords = [
        "the", "is", "a", "an", "and", "or",
        "in", "on", "of", "to", "for", "this",
        "that", "are", "with", "was"
    ];

    let words = text.toLowerCase()
        .replace(/[.,!?;:]/g, "")
        .split(/\s+/);

    let keywords = [];

    for (let word of words) {
        if (word.length > 3 && !stopWords.includes(word)) {
            keywords.push(word);
        }
    }

    let uniqueKeywords = [...new Set(keywords)];

    document.getElementById("result").innerText =
        uniqueKeywords.length > 0
        ? uniqueKeywords.join(", ")
        : "No keywords found.";
}
