import dynamic from "next/dynamic";

const CosmaeExperience = dynamic(
  () => import("@/components/cosmae/CosmaeExperience").then((m) => m.default),
);

export default function Page() {
  return (
    <main className="h-dvh w-full">
      <CosmaeExperience />
    </main>
  );
}
