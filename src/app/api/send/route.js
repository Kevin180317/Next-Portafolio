// route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    // Obtén los datos del formulario desde la solicitud
    const formData = await request.json();

    // Configura la variable de entorno RESEND_API_KEY en tu servidor
    // No incluyas la clave de API aquí directamente
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Cambia por tu dirección de correo electrónico
      to: ["kevin@e-commetrics.com"], // Cambia por la dirección de correo de destino
      subject: "Portafolio contacto", // Usa el asunto del formulario o uno predeterminado
      react: (
        <>
          <p>Asunto: {formData.subject }</p>
          <p>Correo Electrónico: {formData.email}</p>
          <p>Mensaje: {formData.message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
