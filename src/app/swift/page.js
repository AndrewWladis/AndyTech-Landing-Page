import { redirect } from "next/navigation";

const SWIFTIE_SWIPE_URL = "https://apps.apple.com/us/app/swiftie-swipe/id6479224086";

export default function SwiftPage() {
  redirect(SWIFTIE_SWIPE_URL);
}
