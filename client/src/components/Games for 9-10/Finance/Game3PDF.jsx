// components/InvestmentGuidePDF.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  section: { marginBottom: 12 },
  heading: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  subheading: { fontSize: 14, marginTop: 8, marginBottom: 4 },
  listItem: { marginLeft: 10, marginBottom: 2 },
  table: { display: "table", width: "auto", marginTop: 8, borderWidth: 1 },
  tableRow: { flexDirection: "row" },
  tableCol: {
    width: "50%",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
});

const InvestmentGuidePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Needs vs Wants</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>Needs</Text>
          </View>
          <View style={styles.tableCol}>
            <Text>Wants</Text>
          </View>
        </View>
        {[
          ["Stationery", "Ice Cream"],
          ["School Bus", "Comic Books"],
          ["Uniform", "Mobile Games"],
        ].map(([need, want], i) => (
          <View key={i} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text>{need}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{want}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.subheading}>How to Create a Monthly Budget:</Text>
      <Text style={styles.listItem}>
        • List your income (pocket money, gifts)
      </Text>
      <Text style={styles.listItem}>• Divide into: Needs, Wants, Savings</Text>
      <Text style={styles.listItem}>• Track actual spending</Text>

      <Text style={styles.subheading}>Why Save Money?</Text>
      <Text style={styles.listItem}>• Helps in emergencies</Text>
      <Text style={styles.listItem}>
        • Allows you to buy something big later (like a bicycle or gadget)
      </Text>

      <Text style={styles.subheading}>Emergency Fund:</Text>
      <Text style={styles.listItem}>
        • Target: Save Rs 1000 for emergencies
      </Text>
      <Text style={styles.listItem}>
        • Use only for unexpected needs, not regular expenses
      </Text>

      <Text style={styles.subheading}>Activity:</Text>
      <Text style={styles.listItem}>
        Make a budget with Rs 2000. Allocate it across needs, wants, and
        savings.
      </Text>
    </Page>
  </Document>
);

export default InvestmentGuidePDF;
