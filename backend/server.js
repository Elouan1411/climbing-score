require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion Supabase avec la clé service_role (privée)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const PORT = process.env.PORT || 3000;

// Route test simple
app.get("/", (req, res) => {
  res.send("API backend Supabase escalade fonctionne !");
});

// Exemple : créer une compétition (POST /competitions)
app.post("/competitions", async (req, res) => {
  const { name, date } = req.body;
  try {
    const { data, error } = await supabase
      .from("competitions")
      .insert([{ name, date }]);

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Exemple : récupérer toutes les compétitions (GET /competitions)
app.get("/competitions", async (req, res) => {
  try {
    const { data, error } = await supabase.from("competitions").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
