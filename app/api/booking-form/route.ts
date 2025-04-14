import { Resend } from "resend";

const usermail = process.env.MARKNAD_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const {
    name,
    email,
    number,
    adress,
    city,
    destinationTitle,
    adults,
    children,
    departure,
    arrival,
    message,
    season,
    title,
  } = await req.json();

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
    <h1>Formulär från: ${title}</h1>
    <h2>Säsong: ${season}</h2>
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <p>tel: ${number}</p>
       <p>Adress: ${adress}</p>
        <p>Stad: ${city}</p>
         <p>Destination: ${destinationTitle}</p>
         <p>Antal vuxna: ${adults}</p>
         <p>Antal barn: ${children}</p>
         <p>Ankomstdatum: ${departure}</p>
         <p>Avresedatum: ${arrival}</p>
      <p>Meddelande: ${message}</p>
    </div>
  `;
  try {
    const { data, error } = await resend.emails.send({
      from: "Notifikation: Kontakt Form <onboarding@resend.dev>",
      to: [`${usermail}`],
      subject: `Notifikation: Customer ${name}`,
      html: messageBody,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
