import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { getPost } from "../repository/postRepository";
import Markdown from "react-native-markdown-display";

interface Props {}

const PostDetailsScreen = (props: Props) => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post Not Found</Text>;
  }

  return (
    // <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>{post.title}</Text>
      <Markdown>{post.content}</Markdown>
    </ScrollView>
    // </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    maxWidth: 960,
    width: "100%",
    marginHorizontal: "auto",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});
