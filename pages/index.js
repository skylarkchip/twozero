import client from "@/client";
import { gql } from "@apollo/client";
import { Page } from "@/components/pages";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";
import { Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Text>Isipin mo yon, Tiger.</Text>
    </div>
  );
};

export default Home;
// export default Page;

// export const getServerSideProps = async (context) => {
//   const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
//   const { data } = await client.query({
//     query: gql`
//       query PageQuery($uri: String!) {
//         nodeByUri(uri: $uri) {
//           id
//           ... on Page {
//             id
//             blocks
//           }
//         }
//       }
//     `,
//     variables: {
//       uri,
//     },
//   });

//   const blocks = cleanAndTransformBlocks(JSON.stringify(data.nodeByUri.blocks));

//   return {
//     props: {
//       blocks,
//     },
//   };
// };
