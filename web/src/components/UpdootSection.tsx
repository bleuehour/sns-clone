import { IconButton } from "@chakra-ui/button";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  PostSnippetFragment,
  PostsQuery,
  useVoteMutation,
} from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [LoadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >();
  const [, vote] = useVoteMutation();
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mr={4}
      padding="1"
    >
      <IconButton
        onClick={async () => {
          setLoadingState("updoot-loading");
          await vote({
            postId: post._id,
            value: 1,
          });
          setLoadingState("not-loading");
        }}
        isLoading={LoadingState === "updoot-loading"}
        aria-label="upvote"
        icon={<ChevronUpIcon />}
        color={post.voteStatus === 1 ? "green" : undefined}
      />
      {post.points}

      <IconButton
        onClick={async () => {
          setLoadingState("downdoot-loading");

          await vote({
            postId: post._id,
            value: -1,
          });
          setLoadingState("not-loading");
        }}
        isLoading={LoadingState === "downdoot-loading"}
        aria-label="downvote"
        icon={<ChevronDownIcon />}
        color={post.voteStatus === -1 ? "red" : undefined}
      />
    </Flex>
  );
};
