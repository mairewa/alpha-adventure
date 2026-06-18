// learn.js — Darjah 1 educational layer for Alpha Adventure
// Hints are always words the player can actually spell from their current tiles.

var Learn = {

    // ── Vocabulary database ───────────────────────────────────────────────
    vocab: [
        // NUMBERS
        { word:"ONE",   hint:"Satu",           category:"Numbers 🔢",   emoji:"1️⃣" },
        { word:"TWO",   hint:"Dua",            category:"Numbers 🔢",   emoji:"2️⃣" },
        { word:"TEN",   hint:"Sepuluh",        category:"Numbers 🔢",   emoji:"🔟" },
        { word:"SIX",   hint:"Enam",           category:"Numbers 🔢",   emoji:"6️⃣" },
        { word:"ODD",   hint:"Ganjil",         category:"Numbers 🔢",   emoji:"🔢" },
        { word:"SUM",   hint:"Jumlah",         category:"Numbers 🔢",   emoji:"➕" },
        { word:"NET",   hint:"Bersih",         category:"Numbers 🔢",   emoji:"📊" },
        { word:"NINE",  hint:"Sembilan",       category:"Numbers 🔢",   emoji:"9️⃣" },
        { word:"FIVE",  hint:"Lima",           category:"Numbers 🔢",   emoji:"5️⃣" },
        { word:"FOUR",  hint:"Empat",          category:"Numbers 🔢",   emoji:"4️⃣" },

        // COLOURS
        { word:"RED",   hint:"Merah",          category:"Colours 🎨",   emoji:"🔴" },
        { word:"BLUE",  hint:"Biru",           category:"Colours 🎨",   emoji:"🔵" },
        { word:"GREEN", hint:"Hijau",          category:"Colours 🎨",   emoji:"🟢" },
        { word:"PINK",  hint:"Merah jambu",    category:"Colours 🎨",   emoji:"🌸" },
        { word:"GOLD",  hint:"Emas",           category:"Colours 🎨",   emoji:"🌟" },
        { word:"TAN",   hint:"Coklat muda",    category:"Colours 🎨",   emoji:"🟤" },
        { word:"ROSE",  hint:"Merah muda",     category:"Colours 🎨",   emoji:"🌹" },
        { word:"GREY",  hint:"Kelabu",         category:"Colours 🎨",   emoji:"🩶" },
        { word:"LIME",  hint:"Hijau muda",     category:"Colours 🎨",   emoji:"🟩" },
        { word:"TEAL",  hint:"Biru kehijauan", category:"Colours 🎨",   emoji:"🫐" },

        // ANIMALS
        { word:"CAT",   hint:"Kucing",         category:"Animals 🐾",   emoji:"🐱" },
        { word:"DOG",   hint:"Anjing",         category:"Animals 🐾",   emoji:"🐶" },
        { word:"COW",   hint:"Lembu",          category:"Animals 🐾",   emoji:"🐄" },
        { word:"HEN",   hint:"Ayam betina",    category:"Animals 🐾",   emoji:"🐔" },
        { word:"BEE",   hint:"Lebah",          category:"Animals 🐾",   emoji:"🐝" },
        { word:"OWL",   hint:"Burung hantu",   category:"Animals 🐾",   emoji:"🦉" },
        { word:"APE",   hint:"Kera",           category:"Animals 🐾",   emoji:"🦍" },
        { word:"EMU",   hint:"Burung besar",   category:"Animals 🐾",   emoji:"🐦" },
        { word:"RAT",   hint:"Tikus",          category:"Animals 🐾",   emoji:"🐀" },
        { word:"HEN",   hint:"Ayam betina",    category:"Animals 🐾",   emoji:"🐔" },
        { word:"CRAB",  hint:"Ketam",          category:"Animals 🐾",   emoji:"🦀" },
        { word:"FROG",  hint:"Katak",          category:"Animals 🐾",   emoji:"🐸" },
        { word:"BEAR",  hint:"Beruang",        category:"Animals 🐾",   emoji:"🐻" },
        { word:"DEER",  hint:"Rusa",           category:"Animals 🐾",   emoji:"🦌" },
        { word:"LION",  hint:"Singa",          category:"Animals 🐾",   emoji:"🦁" },
        { word:"BIRD",  hint:"Burung",         category:"Animals 🐾",   emoji:"🐦" },
        { word:"FISH",  hint:"Ikan",           category:"Animals 🐾",   emoji:"🐟" },
        { word:"DUCK",  hint:"Itik",           category:"Animals 🐾",   emoji:"🦆" },
        { word:"GOAT",  hint:"Kambing",        category:"Animals 🐾",   emoji:"🐐" },
        { word:"WOLF",  hint:"Serigala",       category:"Animals 🐾",   emoji:"🐺" },
        { word:"WORM",  hint:"Cacing",         category:"Animals 🐾",   emoji:"🪱" },

        // BODY PARTS
        { word:"EAR",   hint:"Telinga",        category:"Body 🧠",      emoji:"👂" },
        { word:"EYE",   hint:"Mata",           category:"Body 🧠",      emoji:"👁️" },
        { word:"ARM",   hint:"Lengan",         category:"Body 🧠",      emoji:"💪" },
        { word:"LEG",   hint:"Kaki",           category:"Body 🧠",      emoji:"🦵" },
        { word:"RIB",   hint:"Rusuk",          category:"Body 🧠",      emoji:"🦴" },
        { word:"LIP",   hint:"Bibir",          category:"Body 🧠",      emoji:"👄" },
        { word:"GUM",   hint:"Gusi",           category:"Body 🧠",      emoji:"🦷" },
        { word:"TOE",   hint:"Jari kaki",      category:"Body 🧠",      emoji:"🦶" },
        { word:"CHIN",  hint:"Dagu",           category:"Body 🧠",      emoji:"😶" },
        { word:"SHIN",  hint:"Betis",          category:"Body 🧠",      emoji:"🦵" },
        { word:"HEEL",  hint:"Tumit",          category:"Body 🧠",      emoji:"🦶" },
        { word:"KNEE",  hint:"Lutut",          category:"Body 🧠",      emoji:"🦵" },
        { word:"NAIL",  hint:"Kuku",           category:"Body 🧠",      emoji:"💅" },
        { word:"HAIR",  hint:"Rambut",         category:"Body 🧠",      emoji:"💇" },
        { word:"BONE",  hint:"Tulang",         category:"Body 🧠",      emoji:"🦴" },
        { word:"SKIN",  hint:"Kulit",          category:"Body 🧠",      emoji:"🫀" },

        // PLACES
        { word:"SEA",   hint:"Laut",           category:"Places 🌍",    emoji:"🌊" },
        { word:"BAY",   hint:"Teluk",          category:"Places 🌍",    emoji:"🏖️" },
        { word:"LAKE",  hint:"Tasik",          category:"Places 🌍",    emoji:"🏞️" },
        { word:"HILL",  hint:"Bukit",          category:"Places 🌍",    emoji:"⛰️" },
        { word:"DALE",  hint:"Lembah",         category:"Places 🌍",    emoji:"🌄" },
        { word:"GLEN",  hint:"Lembah sempit",  category:"Places 🌍",    emoji:"🌿" },
        { word:"ROAD",  hint:"Jalan",          category:"Places 🌍",    emoji:"🛣️" },
        { word:"TOWN",  hint:"Bandar",         category:"Places 🌍",    emoji:"🏘️" },
        { word:"FARM",  hint:"Ladang",         category:"Places 🌍",    emoji:"🌾" },
        { word:"CAVE",  hint:"Gua",            category:"Places 🌍",    emoji:"🕳️" },
        { word:"PARK",  hint:"Taman",          category:"Places 🌍",    emoji:"🌳" },
        { word:"MINE",  hint:"Lombong",        category:"Places 🌍",    emoji:"⛏️" },
        { word:"POND",  hint:"Kolam",          category:"Places 🌍",    emoji:"🪷" },
        { word:"WELL",  hint:"Perigi",         category:"Places 🌍",    emoji:"🪣" },

        // FOOD
        { word:"EGG",   hint:"Telur",          category:"Food 🍎",      emoji:"🥚" },
        { word:"PIE",   hint:"Pai",            category:"Food 🍎",      emoji:"🥧" },
        { word:"NUT",   hint:"Kacang",         category:"Food 🍎",      emoji:"🥜" },
        { word:"OAT",   hint:"Oat",            category:"Food 🍎",      emoji:"🌾" },
        { word:"PEA",   hint:"Kacang pea",     category:"Food 🍎",      emoji:"🫛" },
        { word:"FIG",   hint:"Buah ara",       category:"Food 🍎",      emoji:"🍑" },
        { word:"YAM",   hint:"Ubi",            category:"Food 🍎",      emoji:"🍠" },
        { word:"CORN",  hint:"Jagung",         category:"Food 🍎",      emoji:"🌽" },
        { word:"LIME",  hint:"Limau nipis",    category:"Food 🍎",      emoji:"🍋" },
        { word:"PEAR",  hint:"Pear",           category:"Food 🍎",      emoji:"🍐" },
        { word:"PLUM",  hint:"Plum",           category:"Food 🍎",      emoji:"🫐" },
        { word:"RICE",  hint:"Nasi",           category:"Food 🍎",      emoji:"🍚" },
        { word:"MILK",  hint:"Susu",           category:"Food 🍎",      emoji:"🥛" },
        { word:"MEAT",  hint:"Daging",         category:"Food 🍎",      emoji:"🥩" },
        { word:"BREAD", hint:"Roti",           category:"Food 🍎",      emoji:"🍞" },

        // OPPOSITES / ADJECTIVES
        { word:"BIG",   hint:"Besar",          category:"Opposites ↔️", emoji:"🔝" },
        { word:"OLD",   hint:"Tua",            category:"Opposites ↔️", emoji:"🧓" },
        { word:"NEW",   hint:"Baru",           category:"Opposites ↔️", emoji:"✨" },
        { word:"HOT",   hint:"Panas",          category:"Opposites ↔️", emoji:"🔥" },
        { word:"WET",   hint:"Basah",          category:"Opposites ↔️", emoji:"💧" },
        { word:"DRY",   hint:"Kering",         category:"Opposites ↔️", emoji:"☀️" },
        { word:"SAD",   hint:"Sedih",          category:"Opposites ↔️", emoji:"😢" },
        { word:"GOOD",  hint:"Baik",           category:"Opposites ↔️", emoji:"👍" },
        { word:"HARD",  hint:"Keras",          category:"Opposites ↔️", emoji:"🪨" },
        { word:"SOFT",  hint:"Lembut",         category:"Opposites ↔️", emoji:"🧸" },
        { word:"COLD",  hint:"Sejuk",          category:"Opposites ↔️", emoji:"🧊" },
        { word:"FAST",  hint:"Laju",           category:"Opposites ↔️", emoji:"💨" },
        { word:"SLOW",  hint:"Perlahan",       category:"Opposites ↔️", emoji:"🐢" },
        { word:"TALL",  hint:"Tinggi",         category:"Opposites ↔️", emoji:"📏" },
        { word:"THIN",  hint:"Kurus",          category:"Opposites ↔️", emoji:"🪶" },
        { word:"WIDE",  hint:"Lebar",          category:"Opposites ↔️", emoji:"↔️" },
        { word:"LONG",  hint:"Panjang",        category:"Opposites ↔️", emoji:"📐" },
        { word:"DARK",  hint:"Gelap",          category:"Opposites ↔️", emoji:"🌑" },
        { word:"BOLD",  hint:"Berani",         category:"Opposites ↔️", emoji:"🦁" },
        { word:"KIND",  hint:"Baik hati",      category:"Opposites ↔️", emoji:"🤗" },

        // ACTIONS
        { word:"RUN",   hint:"Lari",           category:"Actions 🏃",   emoji:"🏃" },
        { word:"EAT",   hint:"Makan",          category:"Actions 🏃",   emoji:"🍽️" },
        { word:"SIT",   hint:"Duduk",          category:"Actions 🏃",   emoji:"🪑" },
        { word:"CUT",   hint:"Potong",         category:"Actions 🏃",   emoji:"✂️" },
        { word:"DIG",   hint:"Gali",           category:"Actions 🏃",   emoji:"⛏️" },
        { word:"FLY",   hint:"Terbang",        category:"Actions 🏃",   emoji:"🕊️" },
        { word:"MIX",   hint:"Campur",         category:"Actions 🏃",   emoji:"🥄" },
        { word:"SWIM",  hint:"Berenang",       category:"Actions 🏃",   emoji:"🏊" },
        { word:"SING",  hint:"Menyanyi",       category:"Actions 🏃",   emoji:"🎤" },
        { word:"JUMP",  hint:"Melompat",       category:"Actions 🏃",   emoji:"🦘" },
        { word:"KICK",  hint:"Menendang",      category:"Actions 🏃",   emoji:"🦶" },
        { word:"PULL",  hint:"Tarik",          category:"Actions 🏃",   emoji:"🧲" },
        { word:"PUSH",  hint:"Tolak",          category:"Actions 🏃",   emoji:"🤜" },
        { word:"READ",  hint:"Membaca",        category:"Actions 🏃",   emoji:"📖" },
        { word:"DRAW",  hint:"Melukis",        category:"Actions 🏃",   emoji:"🎨" },
        { word:"FOLD",  hint:"Lipat",          category:"Actions 🏃",   emoji:"📄" },
        { word:"COOK",  hint:"Memasak",        category:"Actions 🏃",   emoji:"👨‍🍳" },
        { word:"CLAP",  hint:"Tepuk tangan",   category:"Actions 🏃",   emoji:"👏" },
        { word:"WAVE",  hint:"Melambai",       category:"Actions 🏃",   emoji:"👋" },
        { word:"WALK",  hint:"Berjalan",       category:"Actions 🏃",   emoji:"🚶" },
        { word:"TALK",  hint:"Bercakap",       category:"Actions 🏃",   emoji:"🗣️" },
        { word:"LOOK",  hint:"Tengok",         category:"Actions 🏃",   emoji:"👀" },
        { word:"HELP",  hint:"Tolong",         category:"Actions 🏃",   emoji:"🙋" },
        { word:"OPEN",  hint:"Buka",           category:"Actions 🏃",   emoji:"🔓" },
        { word:"POUR",  hint:"Tuang",          category:"Actions 🏃",   emoji:"🫗" },
        { word:"ROLL",  hint:"Guling",         category:"Actions 🏃",   emoji:"🎲" },
        { word:"DROP",  hint:"Jatuh",          category:"Actions 🏃",   emoji:"💧" },

        // NATURE
        { word:"SUN",   hint:"Matahari",       category:"Nature 🌿",    emoji:"☀️" },
        { word:"DEW",   hint:"Embun",          category:"Nature 🌿",    emoji:"💦" },
        { word:"ICE",   hint:"Ais",            category:"Nature 🌿",    emoji:"🧊" },
        { word:"MUD",   hint:"Lumpur",         category:"Nature 🌿",    emoji:"🟫" },
        { word:"OAK",   hint:"Pokok oak",      category:"Nature 🌿",    emoji:"🌳" },
        { word:"VINE",  hint:"Pokok anggur",   category:"Nature 🌿",    emoji:"🍇" },
        { word:"FERN",  hint:"Paku pakis",     category:"Nature 🌿",    emoji:"🌿" },
        { word:"RAIN",  hint:"Hujan",          category:"Nature 🌿",    emoji:"🌧️" },
        { word:"WIND",  hint:"Angin",          category:"Nature 🌿",    emoji:"💨" },
        { word:"SAND",  hint:"Pasir",          category:"Nature 🌿",    emoji:"🏖️" },
        { word:"SOIL",  hint:"Tanah",          category:"Nature 🌿",    emoji:"🌱" },
        { word:"LEAF",  hint:"Daun",           category:"Nature 🌿",    emoji:"🍃" },
        { word:"SEED",  hint:"Benih",          category:"Nature 🌿",    emoji:"🌱" },
        { word:"ROCK",  hint:"Batu",           category:"Nature 🌿",    emoji:"🪨" },
        { word:"FIRE",  hint:"Api",            category:"Nature 🌿",    emoji:"🔥" },
        { word:"MOON",  hint:"Bulan",          category:"Nature 🌿",    emoji:"🌙" },
        { word:"STAR",  hint:"Bintang",        category:"Nature 🌿",    emoji:"⭐" },
        { word:"SNOW",  hint:"Salji",          category:"Nature 🌿",    emoji:"❄️" },
        { word:"WOOD",  hint:"Kayu",           category:"Nature 🌿",    emoji:"🪵" },
        { word:"STEM",  hint:"Batang",         category:"Nature 🌿",    emoji:"🌿" },
        { word:"MIST",  hint:"Kabus",          category:"Nature 🌿",    emoji:"🌫️" },
        { word:"TIDE",  hint:"Pasang surut",   category:"Nature 🌿",    emoji:"🌊" },
        { word:"WAVE",  hint:"Ombak",          category:"Nature 🌿",    emoji:"🌊" },
        { word:"GALE",  hint:"Ribut",          category:"Nature 🌿",    emoji:"🌬️" },
        { word:"DUNE",  hint:"Bukit pasir",    category:"Nature 🌿",    emoji:"🏜️" },
    ],

    // words tracked this battle
    battle_words_learned: [],
    current_hints: [],

    // ── Check if a word can be spelled from the current grid tiles ────────
    // Uses letter frequency — if the grid has one E, you can't spell BEE
    can_spell_from_tiles: function(word, grid_tiles) {
        // Count available letters in grid (skip empty/stolen slots)
        var available = {};
        for (var i = 0; i < grid_tiles.length; i++) {
            var tile = grid_tiles[i];
            if (tile && tile.letter && tile !== 0 && tile !== "stolen") {
                var l = tile.letter.toUpperCase();
                available[l] = (available[l] || 0) + 1;
            }
        }
        // Check each letter of the word is available in sufficient quantity
        var needed = {};
        for (var i = 0; i < word.length; i++) {
            var l = word[i].toUpperCase();
            needed[l] = (needed[l] || 0) + 1;
        }
        for (var l in needed) {
            if ((available[l] || 0) < needed[l]) { return false; }
        }
        return true;
    },

    // ── Pick hints that are actually spellable from the current grid ──────
    pick_hints_from_grid: function(grid_tiles, count) {
        count = count || 4;

        // Filter vocab to only words spellable from current tiles
        var spellable = [];
        for (var i = 0; i < this.vocab.length; i++) {
            if (this.can_spell_from_tiles(this.vocab[i].word, grid_tiles)) {
                spellable.push(this.vocab[i]);
            }
        }

        // Shuffle spellable pool
        for (var i = spellable.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = spellable[i]; spellable[i] = spellable[j]; spellable[j] = tmp;
        }

        // Pick with category variety
        var picked = [], seen_cats = {};
        for (var i = 0; i < spellable.length && picked.length < count; i++) {
            if (!seen_cats[spellable[i].category]) {
                picked.push(spellable[i]);
                seen_cats[spellable[i].category] = true;
            }
        }
        // Fill remaining if not enough categories
        for (var i = 0; i < spellable.length && picked.length < count; i++) {
            if (picked.indexOf(spellable[i]) === -1) { picked.push(spellable[i]); }
        }

        return picked;
    },

    // ── Render the hint panel ─────────────────────────────────────────────
    render_hints: function(grid_tiles) {
        // Use current Model grid if not passed in
        var tiles = grid_tiles || (typeof Model !== "undefined" ? Model.tiles.grid_tiles : []);
        this.current_hints = this.pick_hints_from_grid(tiles, 4);

        var panel = document.getElementById("learn_panel");
        if (!panel) { return; }
        panel.innerHTML = "";

        if (this.current_hints.length === 0) {
            var msg = document.createElement("div");
            msg.className = "learn-title";
            msg.textContent = "✏️ Spell words to attack!";
            panel.appendChild(msg);
            return;
        }

        var title = document.createElement("div");
        title.className = "learn-title";
        title.textContent = "✏️ Spell these to attack!";
        panel.appendChild(title);

        var grid = document.createElement("div");
        grid.className = "learn-grid";

        this.current_hints.forEach(function(entry) {
            var box = document.createElement("div");
            box.className = "learn-box";
            box.dataset.word = entry.word;

            // category badge
            var badge = document.createElement("span");
            badge.className = "learn-cat";
            badge.textContent = entry.category;
            box.appendChild(badge);

            // emoji
            var emo = document.createElement("div");
            emo.className = "learn-emoji";
            emo.textContent = entry.emoji;
            box.appendChild(emo);

            // blank letters
            var blanks = document.createElement("div");
            blanks.className = "learn-blanks";
            blanks.id = "blanks_" + entry.word;
            entry.word.split("").forEach(function(letter, idx) {
                var cell = document.createElement("span");
                cell.className = "learn-blank-cell";
                cell.id = "blank_" + entry.word + "_" + idx;
                cell.textContent = "_";
                blanks.appendChild(cell);
            });
            box.appendChild(blanks);

            // hint text (Malay word meaning)
            var hint = document.createElement("div");
            hint.className = "learn-hint";
            hint.textContent = entry.hint;
            box.appendChild(hint);

            grid.appendChild(box);
        });

        panel.appendChild(grid);
    },

    // ── Refresh hints when tiles change (scramble / new tiles) ───────────
    refresh_hints: function() {
        // Keep any already-completed hint words
        var done_words = {};
        this.battle_words_learned.forEach(function(e) { done_words[e.word] = true; });

        this.render_hints();

        // Re-mark completed words as done
        for (var w in done_words) {
            var box = document.querySelector('[data-word="' + w + '"]');
            if (box) { box.className = "learn-box done"; }
        }
    },

    // ── Fill in letters as player selects tiles ───────────────────────────
    highlight_blanks: function(selected_letters_arr) {
        // Reset all blanks
        this.current_hints.forEach(function(entry) {
            for (var i = 0; i < entry.word.length; i++) {
                var cell = document.getElementById("blank_" + entry.word + "_" + i);
                if (cell) { cell.textContent = "_"; cell.className = "learn-blank-cell"; }
            }
            var box = document.querySelector('[data-word="' + entry.word + '"]');
            if (box && box.className !== "learn-box done") { box.className = "learn-box"; }
        });

        if (!selected_letters_arr || selected_letters_arr.length === 0) { return; }

        var typed = selected_letters_arr.map(function(t) { return t.letter; }).join("").toUpperCase();

        this.current_hints.forEach(function(entry) {
            var word = entry.word;
            for (var i = 0; i < Math.min(typed.length, word.length); i++) {
                var cell = document.getElementById("blank_" + word + "_" + i);
                if (!cell) { continue; }
                if (typed[i] === word[i]) {
                    cell.textContent = typed[i];
                    cell.className = "learn-blank-cell filled";
                } else {
                    cell.textContent = typed[i];
                    cell.className = "learn-blank-cell wrong";
                }
            }
            if (typed === word) {
                var box = document.querySelector('[data-word="' + word + '"]');
                if (box) { box.className = "learn-box matched"; }
            }
        });
    },

    // ── Track hint words the player used to attack ────────────────────────
    record_word: function(word) {
        word = word.toUpperCase();
        for (var i = 0; i < this.current_hints.length; i++) {
            if (this.current_hints[i].word === word) {
                var box = document.querySelector('[data-word="' + word + '"]');
                if (box) { box.className = "learn-box done"; }
                var already = false;
                for (var j = 0; j < Learn.battle_words_learned.length; j++) {
                    if (Learn.battle_words_learned[j].word === word) { already = true; break; }
                }
                if (!already) {
                    Learn.battle_words_learned.push({
                        word: this.current_hints[i].word,
                        hint: this.current_hints[i].hint,
                        category: this.current_hints[i].category,
                        emoji: this.current_hints[i].emoji
                    });
                }
                break;
            }
        }
    },

    // ── End-of-battle recap overlay ───────────────────────────────────────
    show_recap: function() {
        var overlay = document.getElementById("recap_overlay");
        if (!overlay) { return; }

        var learned = this.battle_words_learned;
        var html = "<div class='recap-inner'>";
        html += "<div class='recap-title'>🏆 Battle Report!</div>";

        if (learned.length === 0) {
            html += "<p class='recap-empty'>Spell the hint words next battle to score! 💪</p>";
        } else {
            // Group learned words by category
            var by_cat = {};
            learned.forEach(function(e) {
                if (!by_cat[e.category]) { by_cat[e.category] = []; }
                by_cat[e.category].push(e);
            });

            // Index of learned words for quick lookup
            var learned_words = {};
            learned.forEach(function(e) { learned_words[e.word] = true; });

            html += "<p class='recap-subtitle'>You learned " + learned.length + " word" + (learned.length > 1 ? "s" : "") + " today!</p>";

            for (var cat in by_cat) {
                html += "<div class='recap-cat-title'>" + cat + "</div>";

                // Words the player actually spelled
                html += "<div class='recap-words'>";
                by_cat[cat].forEach(function(e) {
                    html += "<div class='recap-word-card'>";
                    html += "<span class='recap-emoji'>" + e.emoji + "</span>";
                    html += "<span class='recap-word'>" + e.word + "</span>";
                    html += "<span class='recap-hint'>" + e.hint + "</span>";
                    html += "</div>";
                });
                html += "</div>";

                // "Did you know?" — other words from same category not yet spelled
                var others = Learn.vocab.filter(function(v) {
                    return v.category === cat && !learned_words[v.word];
                });
                // Deduplicate by word (vocab has some duplicate entries)
                var seen = {}, unique_others = [];
                others.forEach(function(v) {
                    if (!seen[v.word]) { seen[v.word] = true; unique_others.push(v); }
                });
                // Shuffle and take up to 4
                for (var i = unique_others.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = unique_others[i]; unique_others[i] = unique_others[j]; unique_others[j] = tmp;
                }
                unique_others = unique_others.slice(0, 4);

                if (unique_others.length > 0) {
                    html += "<div class='recap-didyouknow'>";
                    html += "<div class='recap-dyk-title'>💡 More " + cat + " words to discover:</div>";
                    html += "<div class='recap-dyk-grid'>";
                    unique_others.forEach(function(v) {
                        html += "<div class='recap-dyk-card'>";
                        html += "<span class='recap-dyk-emoji'>" + v.emoji + "</span>";
                        html += "<span class='recap-dyk-word'>" + v.word + "</span>";
                        html += "<span class='recap-dyk-hint'>" + v.hint + "</span>";
                        html += "</div>";
                    });
                    html += "</div></div>";
                }
            }
        }

        var star_count = Math.min(3, learned.length);
        var stars = "";
        for (var i = 0; i < 3; i++) { stars += i < star_count ? "⭐" : "☆"; }
        html += "<div class='recap-stars'>" + stars + "</div>";
        html += "<button class='recap-btn' id='recap_continue_btn'>Keep going! ➡️</button>";
        html += "</div>";

        overlay.innerHTML = html;
        overlay.style.display = "flex";

        document.getElementById("recap_continue_btn").addEventListener("click", function() {
            overlay.style.display = "none";
            Learn.battle_words_learned = [];
        });
    },

    // ── Init for a new battle ─────────────────────────────────────────────
    init: function() {
        this.battle_words_learned = [];
        this.current_hints = [];
        this.render_hints();
    }

};
