import Button from "@/components/atoms/Button/button";
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
        {/* TODO: Remove button after storybook work */}
        <Button
          variant="Primary"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Primary"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Primary"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Secondary1"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Secondary1"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Secondary1"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Secondary2"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Secondary2"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Secondary2"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Secondary3"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Secondary3"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Secondary3"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Negative1"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Negative1"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Negative1"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Negative2"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Negative2"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Negative2"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Negative3"
          size="Large"
        >
          Button
        </Button>
        <Button
          variant="Negative3"
          size="Medium"
        >
          Button
        </Button>
        <Button
          variant="Negative3"
          size="Small"
        >
          Button
        </Button>
        <Button
          variant="Primary"
          size="Large"
          disabled={true}
        >
          Button
        </Button>
        <Button
          variant="Primary"
          size="Medium"
          disabled={true}
        >
          Button
        </Button>
        <Button
          variant="Primary"
          size="Small"
          disabled={true}
        >
          Button
        </Button>
        <UserProfile {...userInfo} />
      </div>
    </main>
  );
}
