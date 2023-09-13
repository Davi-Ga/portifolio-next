import { Providers } from "./providers";
import NavBar from "../layout/NavBar";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}