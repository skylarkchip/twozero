import React from "react";
import dynamic from "next/dynamic";

// Utils
import { getBlockGap } from "@/utils/spacing";
import { converToArray } from "@/utils/convertToArray";
import { Image } from "@chakra-ui/react";

// Components
const Columns = dynamic(() => import("../columns/columns.component"));
const Column = dynamic(() => import("../column/column.component"));
const Group = dynamic(() => import("../group/group.component"));
const Cover = dynamic(() => import("../cover/cover.component"));
const CustomHeading = dynamic(() =>
  import("../heading/custom-heading.component")
);
const Paragraph = dynamic(() => import("../paragraph/paragraph.component"));
const Services = dynamic(() => import("../services/services.component"));
const Team = dynamic(() => import("../team/team.component"));
const Solutions = dynamic(() => import("../solutions/solutions.component"));
const ContactForm = dynamic(() =>
  import("../contact-form/contact-form.component")
);

const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/columns":
        // console.log(block);
        return (
          <Columns key={block.id} content={block.originalContent}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );

      case "core/column":
        return (
          <Column key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );

      case "core/group":
        // console.log(block);
        return (
          <Group
            key={block.id}
            orientation={block.attributes.layout.orientation}
            justifyContent={block.attributes.layout.justifyContent}
            spacing={
              block.attributes.style
                ? getBlockGap(block.attributes.style.spacing.blockGap)
                : 2
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Group>
        );

      case "core/cover":
        // console.log("Cover", block);
        return (
          <Cover key={block.id} content={block.originalContent}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );

      case "core/heading":
        // console.log("Heading", block);
        return (
          <CustomHeading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
          />
        );

      case "core/paragraph":
        // console.log("Paragraph", block);
        return (
          <Paragraph
            key={block.id}
            align={block.attributes.align}
            content={block.attributes.content}
          />
        );

      case "core/image":
        // console.log("Image", block);
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            alt={block.attributes.alt || ""}
            w="full"
            objectFit="cover"
            objectPosition="center"
          />
        );

      // CUSTOM COMPONENTS
      case "acf/services":
        // console.log("Services", block);
        return (
          <Services
            key={block.id}
            content={converToArray(block.attributes.data, "services_")}
          />
        );

      case "acf/solutions":
        // console.log("Solutions", block);
        return (
          <Solutions
            key={block.id}
            content={converToArray(block.attributes.data, "solutions_")}
          />
        );

      case "acf/team":
        // console.log("Team", block);
        return (
          <Team
            key={block.id}
            content={converToArray(block.attributes.data, "team_")}
          />
        );

      case "acf/formspreeform":
        // console.log("Form", block);
        return (
          <ContactForm key={block.id} formId={block.attributes.data.form_id} />
        );

      default:
        // console.log("UNKNOWN", block);
        break;
    }
  });
};

export default BlockRenderer;
