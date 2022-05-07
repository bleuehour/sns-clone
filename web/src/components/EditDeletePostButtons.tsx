import { IconButton } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
      <NextLink href="post/edit/[_id]" as={`post/edit/${_id}`}>
        <Link>
          <IconButton
            as={Link}
            mr={4}
            mt={15}
            icon={<EditIcon />}
            aria-label="Edit Post"
          />
        </Link>
      </NextLink>
      <IconButton
        mr={4}
        mt={15}
        icon={<DeleteIcon />}
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ _id: _id });
        }}
      ></IconButton>
    </Box>
  );
};
