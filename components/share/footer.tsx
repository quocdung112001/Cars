import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col  xl:flex-row flex-between gap-3 px-10 py-8 border-t border-gray-300 bg-white relative">
      <div className="">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <p>
          hello
          <br />
          may con duoi dan
        </p>
      </div>
      <div>col2</div>
      <div>col3</div>
      <div>col4</div>
    </footer>
  );
}

export default Footer;
