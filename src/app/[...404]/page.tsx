import { notFound, redirect } from "next/navigation";

export default async function NotFound({ params, searchParams }: { params: { [404]: string }, searchParams: Promise<Record<string, string | null>> }) {
  // GET: https://qrt.badbird.dev/api/check?slug=ympc1
  const res = await fetch(`https://qrt.badbird.dev/api/check?slug=${params[404]}`);
  // if 200, redirect to the url
  // get the ref query param
  const ref = (await searchParams).ref ?? null;
  if (res.status === 200) {
    return redirect(`https://qrt.badbird.dev/${params[404]}${ref ? `?ref=${encodeURIComponent(String(ref))}` : ""}`);
  }

  return notFound();
}

