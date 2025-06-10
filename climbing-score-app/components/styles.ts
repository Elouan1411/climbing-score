import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 64,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  sortButton: {
    padding: 2,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  sortButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 40,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
  },
  date: {
    fontSize: 14,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
  },
});
