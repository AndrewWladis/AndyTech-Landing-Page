import { redirect } from "next/navigation";

const DREAM_URL = "https://apps.apple.com/us/app/pillowbook-dream-decoder/id6775021552";

export default function DreamPage() {
  redirect(DREAM_URL);
}
