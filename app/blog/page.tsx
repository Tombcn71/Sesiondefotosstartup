import Posts from "@/components/Posts";
import MyProfilePic from "@/components/MyProfilePic";
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hola y Bienvenido 👋&nbsp;
        <span className="whitespace-nowrap">
          Soy <span className="font-bold">Tom</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
