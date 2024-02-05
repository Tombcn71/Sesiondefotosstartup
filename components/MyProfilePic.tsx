import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-white dark:border-slate-500  rounded-full mx-auto mt-8"
        src="/me.jpeg"
        width={200}
        height={200}
        alt="Dave Gray"
        priority={true}
      />
    </section>
  );
}
