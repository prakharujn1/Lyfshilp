// LegacyPDF.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from "@react-pdf/renderer";

// Tailwind color RGB equivalents
const styles = StyleSheet.create({
  page: {
    position: "relative",
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12
  },
  // Simulated gradient layers
  gradient1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffe4e6" // pink-100
  },
  gradient2: {
    position: "absolute",
    top: 100,
    left: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "#fef9c3", // yellow-100
    opacity: 0.6
  },
  gradient3: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#dbeafe", // blue-100
    opacity: 0.4
  },
  content: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    marginTop: 40
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: "#4f46e5", // indigo-700
    marginBottom: 12,
    fontWeight: "bold"
  },
  section: {
    marginBottom: 10,
    color: "#374151"
  },
  label: {
    fontWeight: "bold"
  },
  quote: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "#6b21a8"
  }
});

export default function LegacyPDF({ traits, values, causes, quote }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Simulated gradient layers */}
        <View style={styles.gradient1} />
        <View style={styles.gradient2} />
        <View style={styles.gradient3} />

        <View style={styles.content}>
          <Text style={styles.title}> My Legacy Vision Board</Text>

          <View style={styles.section}>
            <Text style={styles.label}>Traits:</Text>
            <Text> {traits.length ? traits.join(", ") : "None"}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Values:</Text>
            <Text> {values.length ? values.join(", ") : "None"}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Causes:</Text>
            <Text> {causes.length ? causes.join(", ") : "None"}</Text>
          </View>

          <Text style={styles.quote}>
            “{quote || "Your inspiring legacy quote will appear here…"}”
          </Text>
        </View>
      </Page>
    </Document>
  );
}
