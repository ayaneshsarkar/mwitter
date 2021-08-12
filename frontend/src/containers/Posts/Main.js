const Main = props => {
  return(
    <div className="fullVhHeight posts__main" ref={props.navRef}>
      { props.children }
    </div>
  );
}

export default Main;