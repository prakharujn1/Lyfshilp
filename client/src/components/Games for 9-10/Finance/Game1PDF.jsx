// InvestmentGuidePDF.jsx
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
  bold: {
    fontWeight: "bold",
  },
});

const InvestmentGuidePDFGame1 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>BEGINNER'S GUIDE TO INVESTING SMARTLY</Text>

      <Text style={styles.sectionTitle}>What is an Investment?</Text>
      <Text style={styles.text}>
        An investment is when you allocate money to financial instruments like
        bank deposits, mutual funds, or company shares with the goal of growing
        that money over time. It is different from saving because it involves
        some risk but can give higher returns.
      </Text>

      <Text style={styles.sectionTitle}>
        Types of Investment for Beginners:
      </Text>
      <Text style={styles.bullet}>
        • Fixed Deposits (FD): Fixed interest over a period; very low risk.
      </Text>
      <Text style={styles.bullet}>
        • Government Bonds: Issued by government; pays regular interest.
      </Text>
      <Text style={styles.bullet}>
        • Mutual Funds: Pool of money invested in different companies. Returns
        depend on market.
      </Text>
      <Text style={styles.bullet}>
        • Stock Market (Equity): Buy shares of a company. High return, high
        risk.
      </Text>
      <Text style={styles.bullet}>
        • Gold: Investment in gold coins, jewellery, or ETFs. Good during
        inflation.
      </Text>

      <Text style={styles.sectionTitle}>How Compound Interest Works:</Text>
      <Text style={styles.text}>
        Example: Invest Rs 10,000 at 6% yearly for 5 years.
        {"\n"}Formula: A = P(1 + r)^t = Rs 13,382
        {"\n"}Compound interest grows faster than simple interest because you
        earn on your earnings.
      </Text>

      <Text style={styles.sectionTitle}>Why Start Early?</Text>
      <Text style={styles.text}>
        Rs 500/month from age 15 to 25 = Rs 60,000 total
        {"\n"}At 12% return, value at age 45 = Rs 3.2 lakh (approx.)
      </Text>

      <Text style={styles.sectionTitle}>Practice Activity:</Text>
      <Text style={styles.text}>
        Create your own Rs 10,000 portfolio across the 5 investment options.
      </Text>
    </Page>
  </Document>
);

export default InvestmentGuidePDFGame1;
