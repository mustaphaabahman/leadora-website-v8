import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real production environment, you would use a service like Resend, EmailJS, or Nodemailer here.
    // Since we don't have SMTP credentials set up, we will log it to the console.
    // The request requested sending an email to mustaphaabahman628@gmail.com
    
    console.log("====================================");
    console.log("NEW LEAD SUBMISSION");
    console.log("To: mustaphaabahman628@gmail.com");
    console.log("------------------------------------");
    console.log(`Full Name: ${data.fullName}`);
    console.log(`Business Name: ${data.businessName}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`WhatsApp: ${data.whatsapp}`);
    console.log(`Email: ${data.email}`);
    console.log(`Industry: ${data.industry}`);
    console.log(`Monthly Revenue: ${data.revenue}`);
    console.log(`Marketing Budget: ${data.budget}`);
    console.log(`Business Description: ${data.description}`);
    console.log(`Goals: ${data.goals}`);
    console.log("====================================");

    // Mock successful email delivery
    return NextResponse.json({ success: true, message: "Email sent (mocked)" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 });
  }
}
