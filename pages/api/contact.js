const handler = async (req, res) => {
  const data = JSON.parse(req.body);

  const formData = new FormData();

  formData.set("contactName", data.contactName);
  formData.set("emailAddress", data.emailAddress);
  formData.set("phoneNumber", data.phoneNumber);
  formData.set("message", data.message);

  const config = {
    method: "POST",
    body: formData,
  };

  const response = await fetch(
    `${process.env.host}/wp-json/contact-form-7/v1/contact-forms/106/feedback`,
    config
  );

  if (response.status === 200) {
    res.status(200).send({
      message:
        "Thank you! We've received your message and will respond as soon as possible.",
    });
  } else {
    res.status(406).send({ message: "Error" });
  }
};

export default handler;
