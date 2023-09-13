import { Providers } from "./providers";
import NavBar from "../layout/NavBar";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/iconguidebar.svg" />
      <body>
        <Providers>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}