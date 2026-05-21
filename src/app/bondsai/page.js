import { redirect } from "next/navigation";

const BONDS_SAI_URL = "https://apps.apple.com/us/app/bonds-ai/id6767971558 ";

export default function BondsaiPage() {
  redirect(BONDS_SAI_URL);
}
