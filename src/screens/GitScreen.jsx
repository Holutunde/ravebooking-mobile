import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";
import React from 'react'

const GitScreen = () => {
  const githubUrl = "https://github.com/Holutunde";
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: githubUrl }} />
    </SafeAreaView>
  );
}

export default GitScreen

const styles = StyleSheet.create({})