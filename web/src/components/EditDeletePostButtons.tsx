import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useDeletePostMutation } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  _id: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  _id,
}) => {
  const [, deletePost] = useDeletePostMutation();

  return (
    <Box>
      <IconButton
        icon={<DeleteIcon />}
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ _id: _id });
        }}
      ></IconButton>
      <NextLink href="post/edit/[_id]" as={`post/edit/${_id}`}>
        <Link>
          <div>edit</div>
        </Link>
      </NextLink>
    </Box>
  );
};
