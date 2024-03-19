import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Post } from "../types/post";
import { Link } from "expo-router";
import { ORIGIN } from "../config";

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <Link href={`/${post.slug}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: `${ORIGIN}/thumbnails/${post.thumbnail}` }}
          style={styles.thumbnail}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Text style={styles.date}>Posted: {post.date}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default PostListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    minWidth: Platform.OS === "web" ? 400 : 0,
  },
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 16,
    marginRight: 10,
  },
  contentContainer: {
    gap: 15,
    width: "60%",
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    color: "black",
    fontWeight: "400",
  },
  date: {
    fontSize: 12,
    color: "black",
    fontWeight: "400",
    textAlign: "right",
  },
});
