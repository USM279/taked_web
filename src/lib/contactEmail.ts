import { saveSubmission } from "./firestore";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  locale: "ar" | "en";
};

const WEB3FORMS_ACCESS_KEY = "d37b7ca9-9bf2-44a5-9441-8e09712ccdfa";

export const sendContactEmail = async (payload: ContactEmailPayload) => {
  const safeService = payload.service?.trim()
    ? payload.service
    : payload.locale === "ar"
      ? "غير محدد"
      : "Not specified";

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  // Save to Firestore (non-blocking — don't throw if it fails)
  saveSubmission({
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    service: safeService,
    message: payload.message,
    locale: payload.locale,
    pageUrl,
  }).catch((err) => console.warn("Firestore save failed:", err));

  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("phone", payload.phone);
  formData.append("service", safeService);
  formData.append("message", payload.message);
  formData.append("locale", payload.locale);
  formData.append("page_url", pageUrl);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Web3Forms submission failed");
  }

  return data;
};
