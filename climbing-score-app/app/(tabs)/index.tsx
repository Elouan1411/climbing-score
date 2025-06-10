import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  useColorScheme,
} from "react-native";

import styles from "@/components/styles";

import { fetchCompetitions } from "../../api";
import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "../../constants/Colors"; // adapte le chemin

export default function App() {
  const [competitions, setCompetitions] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const colorScheme = useColorScheme() ?? "light";

  // Couleurs selon thème
  const buttonBackground = Colors[colorScheme].buttonBackground;
  const buttonText = Colors[colorScheme].buttonText;
  const background = Colors[colorScheme].background;
  const textColor = Colors[colorScheme].text;
  const borderColor = Colors[colorScheme].border;
  const cardBackground = Colors[colorScheme].cardBackground;
  const placeholderColor = Colors[colorScheme].placeholder;

  const loadCompetitions = async () => {
    try {
      const data = await fetchCompetitions();
      setCompetitions(data);
    } catch (error) {
      console.error("Erreur chargement compétitions", error);
    }
  };

  useEffect(() => {
    loadCompetitions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadCompetitions();
    }, []),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadCompetitions().finally(() => setRefreshing(false));
  }, []);

  const filteredCompetitions = competitions.filter((comp) =>
    comp.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const sortedCompetitions = [...filteredCompetitions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortAsc
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={[styles.sortButton, { backgroundColor: buttonBackground }]}
          onPress={() => setSortAsc(!sortAsc)}
        >
          <Text style={[styles.sortButtonText, { color: buttonText }]}>
            {sortAsc ? "↓" : "↑"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={[
            styles.searchInput,
            {
              borderColor: borderColor,
              color: textColor,
            },
          ]}
          placeholder="Rechercher une compétition..."
          placeholderTextColor={placeholderColor}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {sortedCompetitions.length === 0 ? (
          <Text style={[styles.emptyText, { color: placeholderColor }]}>
            Aucune compétition
          </Text>
        ) : (
          sortedCompetitions.map((comp) => (
            <View
              key={comp.id}
              style={[styles.card, { backgroundColor: cardBackground }]}
            >
              <Text style={[styles.name, { color: textColor }]}>
                {comp.name}
              </Text>
              <Text style={[styles.date, { color: placeholderColor }]}>
                {comp.date}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
