import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { getAllPosts, getPost } from "../repository/postRepository";
import Markdown from "react-native-markdown-display";
import Head from "expo-router/head";
import { ORIGIN } from "../config";

interface Props {}

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const posts = await getAllPosts();
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return posts.map((post) => ({ slug: post.slug }));
}

const PostDetailsScreen = (props: Props) => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post Not Found</Text>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta
          property="og:image"
          content={`${ORIGIN}/thumbnails/${post.thumbnail}`}
        />
      </Head>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>{post.title}</Text>
        <Image
          source={{ uri: `${ORIGIN}/thumbnails/${post.thumbnail}` }}
          style={styles.thumbnail}
          alt={post.title}
        />

        <Markdown>{post.content}</Markdown>
      </ScrollView>
    </>
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
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
});
