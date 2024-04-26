import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <div className="prose item-center text-center">
        <h1>👋 Hallo fijn dat je er bent!</h1>
        <div>
          Vul je email in om te beginnen en wij mailen je een ✨magic link✨
          waarmee je kunt inloggen. <br />
          Hierna kun je credits kopen en je fotosessie beginnen.
        </div>
      </div>
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 "
        action="/auth/sign-in"
        method="post">
        <Card>
          <CardHeader>
            <CardTitle>Inloggen / Registreren</CardTitle>
            <CardDescription>
              Login of registreer om te beginnen.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            />
            <Button className="bg-sky-600 border rounded-full  h-12 px-6 m-2 text-lg text-white hover:bg-sky-700">
              Verder
            </Button>
            <Messages />
          </CardContent>
          <CardFooter>
            <p className="text-sm">
              Om te registreren, accepteer onze{" "}
              <a href="#" className="underline">
                Terms of use{" "}
              </a>{" "}
              y{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
