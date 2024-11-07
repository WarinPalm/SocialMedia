import Recommended from "./Recommended";
import rif from '../../../assets/rif.jpg';
import cream from '../../../assets/cream.jpg';
import tam from '../../../assets/tam.jpg';
import kea from '../../../assets/kea.jpg';
import tew from '../../../assets/tew.jpg';
import fai from '../../../assets/fai.jpg';
import may from '../../../assets/may.jpg';


const HomeRight = () => {
  const recommended = [
    {
      pic: rif,
      name: "rif",
      add: "12if._",
    },
    {
      pic: may,
      name: "may",
      add: "aiimay.__",
    },
    {
      pic: cream,
      name: "cream",
      add: "creamcha",
    },
    {
      pic: tam,
      name: "duanpen",
      add: "duanpen.nn",
    },
    {
      pic: fai, 
      name: "fai",
      add: "impytdx_",
    },
    {
      pic: kea,
      name: "naruemon",
      add: "sslm.g",
    },
    {
      pic: tew,
      name: "bhumipat w.",
      add: "bmpxkt",
    },

  ];
  return (
    <div className="right">
      <h1>Recommended</h1>
      {
        recommended.map((recom) => {
          return <Recommended key={recom.add} pic={recom.pic} name={recom.name} add={recom.add} />;
        })
      }
    </div>
  );
};

export default HomeRight;
