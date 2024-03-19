import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllPosts } from "../repository/postRepository";
import { Link } from "expo-router";
import Head from "expo-router/head";
import PostListItem from "../components/PostListItem";

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());
  return (
    <>
      <Head>
        <title>Blog Home</title>
        <meta name="description" content="This is home screen for my blog" />
      </Head>
      <View style={styles.container}>
        <View style={styles.main}>
          <FlatList
            data={posts}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => <PostListItem post={item} />}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    // justifyContent: "center",
    maxWidth: 960,
    // backgroundColor: "red",
    // marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
