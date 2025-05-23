import { getDictionary } from "@/utils/getDictionary";
import { Locale } from "@/config/i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">{dict.common.welcome}</h1>
      </div>
    </main>
  );
}
