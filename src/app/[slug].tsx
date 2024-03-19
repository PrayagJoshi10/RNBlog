import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { getPost } from "../repository/postRepository";

interface Props {}

const PostDetailsScreen = (props: Props) => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post Not Found</Text>;
  }

  return (
    <View>
      <Text>PostDetailsScreen: {post.title}</Text>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({});
