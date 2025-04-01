import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	base: "/first-deployed-fun-project/",
	plugins: [tailwindcss(), react()],
});
