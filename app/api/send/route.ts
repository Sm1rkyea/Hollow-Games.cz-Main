import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { nickname, email, channel, type, aboutme } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Noreply <noreply@hollow-games.cz>',
      to: ['smirkyea@gmail.com'],
      subject: 'Nabídka spolupráce | Creator',
      react: EmailTemplate({ nickname, email, channel, type, aboutme }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}