import { notFound, redirect } from "next/navigation";

export default async function NotFound({
  params,
  searchParams,
}: {
  params: Promise<{ [404]: string }>;
  searchParams: Promise<Record<string, string | null>>;
}) {
  // GET: https://qrt.badbird.dev/api/check?slug=ympc1
  const resolvedParams = await params;
  const res = await fetch(
    `https://qrt.badbird.dev/api/check?slug=${resolvedParams[404]}`,
  );
  // if 200, redirect to the url
  // get the ref query param
  const ref = (await searchParams).ref ?? null;
  if (res.status === 200) {
    return redirect(
      `https://qrt.badbird.dev/${resolvedParams[404]}${ref ? `?ref=${encodeURIComponent(String(ref))}` : ""}`,
    );
  }

  return notFound();
}
