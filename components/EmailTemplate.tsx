import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  nickname: string;
  email: string;
  channel: string;
  type: string;
  aboutme: string;
}

const Field = ({ label, value }: { label: string; value: string }) => (
  <Container className="space-y-1">
    <Text className="text-[15px] text-black">{label}:</Text>
    <Text className="w-full bg-slate-100 py-2 px-3.5 text-black/80">
      {value}
    </Text>
  </Container>
);

export function EmailTemplate({
  nickname,
  email,
  channel,
  type,
  aboutme,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Nová žádost o tvůrce ({type}) od {nickname}.
      </Preview>
      <Tailwind>
        <Body className="bg-slate-50 font-sans">
          <Container className="mx-auto my-0 max-w-[600px] p-6">
            <Container className="rounded border border-slate-300/50 bg-white p-6">
              <Container className="pb-4">
                <Text className="text-[20px] font-bold text-black">
                  Nová žádost o Tvůrce
                </Text>
                <Text className="text-[13px] text-black/60">
                  Uživatel {nickname} má zájem o tvůrce.
                </Text>
              </Container>

              <Container className="pb-6 space-y-2">
                <Field label="Herní nickname" value={nickname} />
                <Field label="Kontaktní e‑mail" value={email} />
                <Field label="Odkaz na kanál" value={channel} />
                <Field label="Kategorie" value={type} />
                <Field label="Proč já" value={aboutme} />
              </Container>

              <Container className="!w-full gap-2.5">
                <Link
                  href={`mailto:${email}`}
                  className="flex-1 rounded bg-green-500 p-2.5 px-24 mr-3 text-center font-medium text-white no-underline"
                >
                  Přijmout
                </Link>
                <Link
                  href='https://email.seznam.cz/'
                  className="flex-1 rounded bg-red-500 p-2.5 px-24 text-center font-medium text-white no-underline"
                >
                  Uzavřít
                </Link>
              </Container>
            </Container>

            <Container className="pt-6">
              <Text className="text-center text-xs text-slate-400">
                ## – Tento e‑mail byl odeslán automaticky – ##
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
