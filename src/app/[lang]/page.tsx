import UserProfile from "@/components/molecules/UserProfile";
import { Locale } from "@/config/i18n-config";
import { getUserInfoFetcher } from "@/services/apis/user/getUserInfo";
import { getDictionary, Module } from "@/utils/getDictionary";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, Module.auth);
  // const response = await postLoginFetcher({
  //   email: "admin@gmail.com",
  //   password: "password123",
  // });
  // console.log("Login Response:", response);

  const userInfo = await getUserInfoFetcher({ userId: "666" });
  console.log("userInfo Response:", userInfo);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-fprimary-yellow bg-gradient-1GO text-4xl font-bold">{dict.common.welcome}</h1>
        <UserProfile {...userInfo} />
      </div>
    </main>
  );
}
