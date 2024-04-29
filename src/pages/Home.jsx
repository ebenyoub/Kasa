import Banner from "../components/Banner";
import background from "../assets/images/img_banner_1.webp"
import Card from "../components/Card";
import { useContext } from "react";
import { DataContext } from "../utils/context";

function Home() {
  console.log("Home => rendering");
  const { datas } = useContext(DataContext)

  return (
    <main>
      <Banner picture={background} isHeader={true} darken="0.4" />
      <div className="cards">
        {datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}

export default Home;
