// PitchPDF.jsx
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image
} from '@react-pdf/renderer';

// Optional: Register a clean font
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf' }
  ],
});

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#fdfce5',
    fontFamily: 'Roboto',
  },
  coverTitle: {
    fontSize: 32,
    color: '#6b21a8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  coverTagline: {
    fontSize: 18,
    textAlign: 'center',
    color: '#475569',
    marginBottom: 30,
  },
  slideBox: {
    padding: 20,
    margin: 10,
    border: '2px solid #facc15',
    backgroundColor: '#fef9c3',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#c026d3',
    marginBottom: 10,
    textAlign: 'center',
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
    marginTop: 12,
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    color: '#1e293b',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    fontSize: 10,
    color: '#9ca3af',
  },
});

const PitchPDF = ({ deck }) => (
  <Document> 
     
    {/* Slide 1: Problem + Audience */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.sectionTitle}>Problem & Audience</Text>
      <View style={styles.slideBox}>
        <Text style={styles.fieldLabel}>Problem</Text>
        <Text style={styles.text}>{deck.slide1.problem || 'Not provided'}</Text>

        <Text style={styles.fieldLabel}>Target Audience</Text>
        <Text style={styles.text}>{deck.slide1.audience || 'Not provided'}</Text>
      </View>
      <Text style={styles.footer}>Slide 1</Text>
    </Page>

    {/* Slide 2: Solution */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.sectionTitle}>Solution</Text>
      <View style={styles.slideBox}>
        <Text style={styles.text}>{deck.slide2.solutionText || 'No description given.'}</Text>
        {deck.slide2.image && (
          <Image src={deck.slide2.image} style={{ marginTop: 20, width: '100%', height: 200, objectFit: 'contain' }} />
        )}
      </View>
      <Text style={styles.footer}>Slide 2</Text>
    </Page>

    {/* Slide 3: How it Works */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.sectionTitle}>How It Works</Text>
      <View style={styles.slideBox}>
        {deck.slide3.steps.map((step, i) => (
          <Text key={i} style={styles.text}>Step {i + 1}: {step || '...'}</Text>
        ))}
      </View>
      <Text style={styles.footer}>Slide 3</Text>
    </Page>

    {/* Slide 4: Why Now */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.sectionTitle}>Why Now?</Text>
      <View style={styles.slideBox}>
        <Text style={styles.text}>{deck.slide4.whyNow || 'No timing explanation provided.'}</Text>
      </View>
      <Text style={styles.footer}>Slide 4</Text>
    </Page>

    {/* Final Cover Slide */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.sectionTitle}>Thank You!</Text>
      
    </Page>
  </Document>
);

export default PitchPDF;
