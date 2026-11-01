import { siteConfig } from '../config';

export interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service?: string;
  equipment?: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  const accessKey = siteConfig.web3FormsKey;

  // If using Web3Forms
  if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New RFQ from ${data.name} - ${data.company || 'Website Lead'}`,
          from_name: "Superior Networks Website",
          name: data.name,
          company: data.company || "N/A",
          phone: data.phone,
          email: data.email,
          service: data.service || "General Inquiry",
          equipment: data.equipment || "N/A",
          message: data.message || "No additional comments provided.",
        }),
      });

      const result = await response.json();
      if (result.success) {
        return { success: true, message: "Thank you! Your inquiry has been sent to our engineering team." };
      } else {
        console.warn("Web3Forms response:", result);
        return { success: false, message: result.message || "Submission failed. Please contact us directly via WhatsApp." };
      }
    } catch (err) {
      console.error("Submission error:", err);
      return { success: false, message: "Network error occurred. Please try sending via WhatsApp or phone." };
    }
  }

  // Fallback demo/mock if no external key is yet configured
  // Simulates instantaneous dispatch
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    message: "Inquiry received! We recommend also sending directly via WhatsApp for immediate dispatch.",
  };
}

export function generateWhatsAppLink(data: ContactFormData): string {
  const lines = [
    `*طلب عرض سعر ومواصفات - شركة سوبيريور نتوركس*`,
    `*الاسم / Name:* ${data.name || 'Not provided'}`,
    `*الشركة / Company:* ${data.company || 'N/A'}`,
    `*الهاتف / Phone:* ${data.phone || 'Not provided'}`,
    `*البريد / Email:* ${data.email || 'Not provided'}`,
    `*الخدمة المطلوبة / Service:* ${data.service || 'General Inquiry'}`,
  ];

  if (data.equipment) {
    lines.push(`*المعدة المطلوبة / Equipment:* ${data.equipment}`);
  }

  if (data.message) {
    lines.push(`*التفاصيل / Details:* ${data.message}`);
  }

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/966579421490?text=${encoded}`;
}

