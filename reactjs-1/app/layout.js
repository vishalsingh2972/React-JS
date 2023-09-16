import './globals.css'
                                                  //layout.js is like index.html that we use in js+html i.e main html file that appears on frontend
export default function RootLayout({ children }) { //children here is/are all the html text that is appearing on the frontend part
  return (
    <html lang="en">
      <body>YJHD{children}</body>
    </html>
  )
}
