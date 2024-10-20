
import React from "react";
import stripe from "../../assets/stripe.svg";
import spotify from "../../assets/spotify.svg";
import airbnb from "../../assets/airbnb.svg";
import google from "../../assets/google.svg";
import tesla from "../../assets/tesla.svg";
import dropbox from "../../assets/dropbox.svg";
import dhl from "../../assets/dhl.svg";
import reddit from "../../assets/reddit.svg";
const ClientLogos: React.FC = () => {
  const topLogos = [
    {
      src: {spotify},
      alt: "Client logo 1",
      className: "object-contain shrink-0 max-w-full aspect-[3.34] w-[211px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18daa1fc63b1890e11fac8ee238e6bea74094bb1feb038f175bb8841fd02f499?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 2",
      className:
        "object-contain shrink-0 my-auto max-w-full aspect-[5.15] w-[build216px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a74eb907b9ca7a34944f87facd95bca35addc6425640fb36426a59af92aeb50?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 3",
      className:
        "object-contain shrink-0 my-auto max-w-full aspect-[9.71] fill-stone-950 w-[232px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da9983555eca19d01fd671e9fc4b2f376286f4fa296ff8e0e708bb2075130928?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 4",
      className: "object-contain shrink-0 max-w-full aspect-[2.91] w-[186px]",
    },
  ];

  const bottomLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a2a3513a29bcd91535f39a82c0d7f97b2901b1157d06ef9e4bfd69855487892?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 5",
      className:
        "object-contain shrink-0 self-stretch my-auto max-w-full aspect-[3.19] w-[179px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d052374b2a54287b2ccadbc488d00e843afef61739aa35c9829100ceb3cdeac?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 6",
      className:
        "object-contain shrink-0 self-stretch my-auto max-w-full aspect-[2.4] w-[149px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b3cad7d51af9275de0351af169aeb06dd3f4d585aa9abd30aeb6036f57b57d9?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 7",
      className:
        "object-contain shrink-0 self-stretch my-auto max-w-full aspect-[7.04] w-[218px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71045551c724414b217c8dec502276a7c3d986069e925479e606c6abcd6e71fd?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e",
      alt: "Client logo 8",
      className:
        "object-contain shrink-0 self-stretch max-w-full aspect-[3.18] w-[210px]",
    },
  ];

  return (
    <section className="">
      <div className="flex flex-wrap gap-5 justify-between mt-56 max-w-full w-[1152px] max-md:mt-10  items-center">
        {topLogos.map((logo, index) => (
          <img
            key={index}
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            className={logo.className}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-center mt-44 max-w-full w-[1148px] max-md:mt-10">
        {bottomLogos.map((logo, index) => (
          <img
            key={index}
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            className={logo.className}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
