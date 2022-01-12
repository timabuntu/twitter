import LogoImg from '../../assets/images/twitter.svg';
const Logo = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full hover:bg-sky-100">
      <a href="/">
        <img className="w-7 h-7" src={LogoImg} alt="Twitter-logo" />
      </a>
    </div>
  );
};

export default Logo;
