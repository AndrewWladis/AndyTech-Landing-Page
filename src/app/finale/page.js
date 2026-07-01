import { redirect } from "next/navigation";

const FINALE_URL = "https://drive.google.com/file/d/1W_WMgOCa7VGYyJr_eJxgcPaIPpkyRB_a/view?usp=sharing";

export default function FinalePage() {
  redirect(FINALE_URL);
}
