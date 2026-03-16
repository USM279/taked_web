import emailjs from "@emailjs/browser";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  locale: "ar" | "en";
};

const CONTACT_RECEIVER_EMAIL =
  import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || "info@takedgroup.com";

export const sendContactEmail = async (payload: ContactEmailPayload) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is missing");
  }

  const safeService = payload.service?.trim()
    ? payload.service
    : payload.locale === "ar"
      ? "غير محدد"
      : "Not specified";

  const response = await emailjs.send(
    serviceId,
    templateId,
    {
      // Common sender fields
      from_name: payload.name,
      name: payload.name,
      user_name: payload.name,

      // Common email fields
      reply_to: payload.email,
      email: payload.email,
      from_email: payload.email,

      // Common contact fields
      phone: payload.phone,
      phone_number: payload.phone,
      service: safeService,
      selected_service: safeService,
      message: payload.message,
      user_message: payload.message,

      // Receiver and metadata
      to_email: CONTACT_RECEIVER_EMAIL,
      locale: payload.locale,
      page_url: typeof window !== "undefined" ? window.location.href : "",
    },
    publicKey
  );

  if (response.status !== 200 || response.text !== "OK") {
    throw new Error(`Unexpected EmailJS response: ${response.status} ${response.text}`);
  }

  return response;
};
