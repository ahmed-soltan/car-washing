import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Car Hub",
    description: "Discover the Bext Cars ",
  };
  
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang="en" >
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

export default layout