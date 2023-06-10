import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ formId }) => {
  return (
    <Formik
      initialValues={{
        contactName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={Yup.object({
        contactName: Yup.string().required("Please enter your name"),
        emailAddress: Yup.string()
          .email("Please enter a valid e-mail address")
          .required("Please enter your e-mail address"),
        phoneNumber: Yup.string().required("Please enter your contact number."),
      })}
      onSubmit={async (values, actions) => {
        // console.log(values);

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(values),
          });

          const rs = await response.json();

          if (response.status === 200) {
            console.log(rs.message);
          } else {
            console.log(rs);
          }
          actions.resetForm();
        } catch (error) {
          console.log("ERROR", rs.message);
        }
      }}
    >
      {(formik) => {
        return (
          <Box
            as="form"
            noValidate
            onSubmit={formik.handleSubmit}
            pt="6"
            w={{ base: "full", lg: "60%" }}
          >
            <VStack spacing="8" w="full">
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="8"
                w="full"
              >
                <FormControl
                  isInvalid={
                    formik.touched["contactName"] &&
                    formik.errors["contactName"]
                  }
                >
                  <Field
                    as={Input}
                    name="contactName"
                    id="contactName"
                    type="text"
                    placeholder="Name"
                    _placeholder={{ fontFamily: "primary" }}
                    fontFamily="primary"
                  />
                  <ErrorMessage
                    name="contactName"
                    render={(msg) => (
                      <Text fontFamily="primary" color="red" fontSize="sm">
                        {msg}
                      </Text>
                    )}
                  />
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched["emailAddress"] &&
                    formik.errors["emailAddress"]
                  }
                >
                  <Field
                    as={Input}
                    name="emailAddress"
                    id="emailAddress"
                    type="email"
                    placeholder="E-mail"
                    _placeholder={{ fontFamily: "primary" }}
                    fontFamily="primary"
                  />
                  <ErrorMessage
                    name="emailAddress"
                    render={(msg) => (
                      <Text fontFamily="primary" color="red" fontSize="sm">
                        {msg}
                      </Text>
                    )}
                  />
                </FormControl>
              </Stack>
              <FormControl
                isInvalid={
                  formik.touched["phoneNumber"] && formik.errors["phoneNumber"]
                }
              >
                <Field
                  as={Input}
                  name="phoneNumber"
                  id="phoneNumber"
                  type="email"
                  placeholder="Phone number"
                  _placeholder={{ fontFamily: "primary" }}
                  fontFamily="primary"
                />
                <ErrorMessage
                  name="phoneNumber"
                  render={(msg) => (
                    <Text fontFamily="primary" color="red" fontSize="sm">
                      {msg}
                    </Text>
                  )}
                />
              </FormControl>
              <FormControl>
                <Field
                  as={Textarea}
                  name="message"
                  id="message"
                  type="text"
                  placeholder="Message"
                  _placeholder={{ fontFamily: "primary" }}
                  fontFamily="primary"
                  minH="32"
                />
              </FormControl>
              <Center>
                <Button
                  variant="solid"
                  borderRadius="full"
                  fontFamily="primary"
                  color="white"
                  bgColor="primary"
                  px="8"
                  type="submit"
                  _hover={{ bgColor: "blackAlpha.700" }}
                  isLoading={formik.isSubmitting}
                >
                  Send
                </Button>
              </Center>
            </VStack>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
