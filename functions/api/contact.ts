// Cloudflare Pages Serverless Function: POST /api/contact
// Executes on Cloudflare's global edge network (including Riyadh & Saudi edge nodes)

interface Env {
  CONTACT_EMAIL?: string;
  RESEND_API_KEY?: string;
  WEB3FORMS_ACCESS_KEY?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const data = await context.request.json() as any;

    const name = data.name || "Anonymous";
    const email = data.email || "";
    const phone = data.phone || "";
    const company = data.company || "N/A";
    const service = data.service || "General Inquiry";
    const equipment = data.equipment || "N/A";
    const message = data.message || "";

    const recipient = context.env.CONTACT_EMAIL || "info@superiorksa.com";

    // If Resend API Key is set in Cloudflare Pages environment variables
    if (context.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Superior Networks Website <onboarding@resend.dev>",
          to: [recipient],
          subject: `New RFQ: ${name} (${company})`,
          text: `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nEquipment: ${equipment}\nMessage: ${message}`,
        }),
      });

      if (res.ok) {
        return new Response(JSON.stringify({ success: true, message: "Email sent successfully via Cloudflare edge." }), {
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Default response acknowledging receipt
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry received at Cloudflare edge.",
        data: { name, company, email, phone, service, equipment },
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Failed to process inquiry" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
