// Game2PDF.jsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 6,
    lineHeight: 1.6,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 4,
  },
  example: {
    fontStyle: "italic",
    marginBottom: 8,
  },
});

const Game2PDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>
        How Stocks Work: A Quick Guide for Beginners
      </Text>

      <Text style={styles.sectionTitle}>What is a Share?</Text>
      <Text style={styles.text}>
        A share is a small part of a company. If you buy shares, you become a
        partial owner. Share value increases if the company performs well.
      </Text>

      <Text style={styles.sectionTitle}>Why Share Prices Change?</Text>
      <Text style={styles.bullet}>
        • Good news (profit, product launch) &rarr; price goes up
      </Text>
      <Text style={styles.bullet}>
        • Bad news (lawsuit, losses) &rarr; price goes down
      </Text>
      <Text style={styles.bullet}>• Demand &gt; Supply &rarr; Price rises</Text>

      <Text style={styles.example}>
        Example: ChillZone launches a hit show &rarr; demand for shares
        increases &rarr; price rises
      </Text>

      <Text style={styles.sectionTitle}>Understanding Graphs:</Text>
      <Text style={styles.text}>
        Price charts show how prices move daily.
        {"\n"}Green line = upward trend; Red line = drop
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Practice:</Text> Read a 5-day price
        chart of SnackCo and predict what to do next.
      </Text>

      <Text style={styles.sectionTitle}>Tips for Beginners:</Text>
      <Text style={styles.bullet}>• Track your trades</Text>
      <Text style={styles.bullet}>• Learn from market news</Text>
      <Text style={styles.bullet}>• Don’t invest all money in one company</Text>
    </Page>
  </Document>
);

export default Game2PDF;
