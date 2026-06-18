// Client-side replacement for the old Flask /checkword and /specialword endpoints.
// Loads the wordlist .txt files (words wrapped in *asterisks*, one per line)
// into Sets so words can be validated without a server.

var WordCheck = {

    lists: {},      // category -> Set of words (e.g. lists["main"], lists["veggies"])
    ready: null,    // Promise that resolves once the main wordlist is loaded

    // category -> filename under wordlists/
    files: {
        main: "wordlist.txt",
        veggies: "wordlist_veggies.txt"
    },

    _load: function(category, filename) {
        return fetch("wordlists/" + filename)
            .then(function(resp) { return resp.text(); })
            .then(function(text) {
                var set = new Set();
                var lines = text.split(/\r?\n/);
                for (var i = 0; i < lines.length; i++) {
                    var word = lines[i].trim().replace(/\*/g, "");
                    if (word.length > 0) { set.add(word); }
                }
                WordCheck.lists[category] = set;
            });
    },

    init: function() {
        WordCheck.ready = WordCheck._load("main", WordCheck.files.main);
        return WordCheck.ready;
    },

    // Loads a special category wordlist on demand (cached after first load)
    _ensure_category: function(category) {
        if (WordCheck.lists[category]) { return Promise.resolve(); }
        var filename = WordCheck.files[category] || ("wordlist_" + category + ".txt");
        return WordCheck._load(category, filename);
    },

    is_valid: function(word) {
        var set = WordCheck.lists["main"];
        return !!(set && set.has(word.toUpperCase()));
    },

    is_valid_in_category: function(word, category, callback) {
        WordCheck._ensure_category(category).then(function() {
            var set = WordCheck.lists[category];
            callback(!!(set && set.has(word.toUpperCase())));
        }).catch(function() { callback(false); });
    }

};

// Kick off loading the main wordlist as soon as this script runs.
WordCheck.init();
