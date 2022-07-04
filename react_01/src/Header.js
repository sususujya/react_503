function Header() {

  const leevar = <h2>Hello World! TGIM</h2>
  let TR = true;
  // let TR = null;

  return (
    <>
      <i className="xi-heart"></i>
      {leevar}
      {TR ? 'cham' : 'gula'}
      <div>React beginner</div>
      <div className={TR ? 'on' : 'off'}>WA!!!!</div>
      <div className={TR && 'on'}>WA!!!! rururuururu</div>
    </>
  );
}

export default Header;
