const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchCompetitions() {
  try {
    const response = await fetch(`${API_BASE_URL}/competitions`);
    if (!response.ok) throw new Error("Erreur de requête");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors du fetch des compétitions :", error);
    return [];
  }
}
